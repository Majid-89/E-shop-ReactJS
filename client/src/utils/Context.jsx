import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const addToCart = (product, quantity = 1) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateCartQuantity = (productId, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(newQuantity, 1) } : item
            )
        );
    };

    const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

    const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <Context.Provider
            value={{
                categories,
                setCategories,
                products,
                setProducts,
                cart,
                addToCart,
                removeFromCart,
                updateCartQuantity,
                totalCartItems,
                cartSubtotal,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
