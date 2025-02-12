import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // 🛒 Add item to cart
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

    // ❌ Remove item from cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // 🔄 Update item quantity in cart
    const updateCartQuantity = (productId, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(newQuantity, 1) } : item
            )
        );
    };

    // 🔢 Get total number of cart items
    const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

    // 💰 Calculate subtotal
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
