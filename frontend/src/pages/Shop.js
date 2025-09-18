import React from 'react';
import { motion } from 'framer-motion';

const Shop = () => {
  return (
    <div 
      className="shop-page" 
      style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", textAlign: "center", padding: "20px" }}
    >
      <motion.h2
        style={{ fontSize: "2rem", lineHeight: "1.2", fontWeight: "bold" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Edible Cups Brought to you by MagoMeal, Enjoy your drink, Eat your cup, save the Planet. Webshop coming Soon...
      </motion.h2>
    </div>
  );
};

export default Shop;
