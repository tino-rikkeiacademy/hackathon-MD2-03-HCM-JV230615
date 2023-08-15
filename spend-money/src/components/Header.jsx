import React, { useState } from "react";
import "./index.css";
import ProductItems from "./ProductItems";

export default function Header({ totalPrice }) {
    return (
        <div className="header">
            To Spend &nbsp; <b> {totalPrice}</b> &nbsp; You have money
        </div>
    );
}
