import React, { useState } from "react";
import ProductItems from "./ProductItems";
import "./index.css";
import Cart from "./Cart";

export default function ProductsList({ products }) {
    // declare products list
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product, quantity) => {
        setCartItems((prevCartItems) => {
            const savedProductIndex =
                prevCartItems &&
                prevCartItems.findIndex(
                    (item) => item?.product?.id === product.id
                );
            if (!savedProductIndex == -1) {
                return [...prevCartItems, { product, quantity }];
            } else {
                const prevSaveProduct = prevCartItems[savedProductIndex];
                return [
                    ...prevCartItems.slice(0, savedProductIndex),
                    {
                        ...prevSaveProduct,
                        product,
                        quantity: quantity + (prevSaveProduct?.quantity || 0),
                    },
                    ...prevCartItems.slice(savedProductIndex + 1),
                ];
            }
        });
    };

    const handleUpdateCartItem = (index, newQuantity) => {
        if (newQuantity >= 0) {
            const updatedCartItems = [...cartItems];
            console.log("updatedCartItems");
            console.log(updatedCartItems);
            updatedCartItems[index].quantity = newQuantity;
            setCartItems(updatedCartItems);
        }
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    return (
        <>
            <div className="card-wrapper">
                {products.map((product) => (
                    <ProductItems
                        key={product.id}
                        product={product}
                        addToCart={handleAddToCart}
                    />
                ))}
            </div>
            <div>
                <Cart
                    cartItems={cartItems}
                    onUpdateCartItem={handleUpdateCartItem}
                    onClearCart={handleClearCart}
                />
            </div>
        </>
    );
}
