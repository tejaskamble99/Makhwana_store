// src/context/ProductContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import productData from '../productDetail.json';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productData);
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);
