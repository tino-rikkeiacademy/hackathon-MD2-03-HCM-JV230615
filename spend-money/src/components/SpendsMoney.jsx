import React from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";
import products from "../products.json";

export default function SpendsMoney() {
    return (
        <div>
            <Header />
            <ProductsList products={products} />
        </div>
    );
}
