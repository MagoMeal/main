import requests
import sys
from datetime import datetime
import json

class MagoMealAPITester:
    def __init__(self, base_url="https://github-builder-5.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}" if endpoint else self.base_url
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            print(f"Response Status: {response.status_code}")
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                    return True, response_data
                except:
                    print(f"Response Text: {response.text}")
                    return True, response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")
                self.failed_tests.append({
                    'name': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text
                })
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'name': name,
                'error': str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )

    def test_get_status_checks(self):
        """Test getting status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "status",
            200
        )

    def test_create_status_check(self):
        """Test creating a status check"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        return self.run_test(
            "Create Status Check",
            "POST",
            "status",
            200,
            data=test_data
        )

    def test_database_connectivity(self):
        """Test database connectivity by creating and retrieving status checks"""
        print("\n🔍 Testing Database Connectivity...")
        
        # First create a status check
        success, created_data = self.test_create_status_check()
        if not success:
            print("❌ Database connectivity test failed - Could not create status check")
            return False
            
        # Then retrieve all status checks to verify it was saved
        success, retrieved_data = self.test_get_status_checks()
        if not success:
            print("❌ Database connectivity test failed - Could not retrieve status checks")
            return False
            
        # Check if our created item is in the retrieved data
        if isinstance(retrieved_data, list) and len(retrieved_data) > 0:
            print("✅ Database connectivity test passed - Data persisted successfully")
            return True
        else:
            print("❌ Database connectivity test failed - No data found")
            return False

def main():
    print("🚀 Starting MagoMeal API Testing...")
    print("=" * 50)
    
    # Setup
    tester = MagoMealAPITester()
    
    # Run basic API tests
    print("\n📡 Testing Basic API Endpoints...")
    tester.test_root_endpoint()
    tester.test_get_status_checks()
    tester.test_create_status_check()
    
    # Test database connectivity
    print("\n🗄️ Testing Database Connectivity...")
    tester.test_database_connectivity()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 FINAL RESULTS:")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.failed_tests:
        print(f"\n❌ FAILED TESTS:")
        for i, test in enumerate(tester.failed_tests, 1):
            print(f"{i}. {test['name']}")
            if 'error' in test:
                print(f"   Error: {test['error']}")
            else:
                print(f"   Expected: {test['expected']}, Got: {test['actual']}")
                print(f"   Response: {test['response']}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())