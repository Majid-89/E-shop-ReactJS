import React from "react";
import { MdClose } from "react-icons/md";

const CartItem = ({ item, removeFromCart, updateCartQuantity }) => {
    const imageUrl = item?.img?.[0]?.url ? import.meta.env.VITE_DEV_URL + item.img[0].url : "/default-image.jpg";

    return (
        <div className=" border-b transition-all duration-300">

            <div className="py-5 flex items-center gap-5 w-full ">
                <div className="w-24 h-24 rounded-lg overflow-hidden border border-gray-300 shrink-0">
                    <img src={imageUrl} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-800 truncate max-w-[220px]">{item.title}</span>

                        {/* ❌ Remove Button */}
                        <MdClose
                            className="cursor-pointer text-red-500 hover:text-red-700 text-2xl transition-all duration-200"
                            onClick={() => removeFromCart(item.id)}
                        />
                    </div>

                    {/* 🔢 Quantity Controls */}
                    <div className="flex items-center gap-4 mt-2">
                        <button
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center text-lg font-bold text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                        >
                            −
                        </button>
                        <span className="text-lg font-semibold text-gray-700">{item.quantity}</span>
                        <button
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center text-lg font-bold text-gray-600 hover:bg-gray-100"
                        >
                            +
                        </button>
                    </div>

                    {/* 💰 Price Info */}
                    <div className="flex justify-end gap-3 items-center text-gray-700">
                        <span className="text-lg font-bold">Price:</span>
                        <span className="text-[#8e2de2] text-xl font-bold">${item.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
