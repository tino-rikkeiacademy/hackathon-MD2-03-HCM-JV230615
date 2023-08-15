import React, { useState } from "react";
import "./WordCounter.css";

const WordCounter = () => {
    // set state
    const [text, setText] = useState("");

    // declare variable
    const countWords = (text) => {
        if (text.trim() == "") {
            return 0;
        }
        const words = text.trim().split(/\s+/);
        return words.length;
    };
    const wordCount = countWords(text);
    const letterCount = text
        .split("")
        .filter((char) => char !== " " && char !== "\n").length;
    const paragraphCount = text
        .split("\n")
        .filter((para) => para !== "").length;

    //handle function

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleUpperCaseClick = () => {
        const upperText = text.toUpperCase();
        setText(upperText);
    };

    const handleLowerCaseClick = () => {
        const lowerText = text.toLowerCase();
        setText(lowerText);
    };

    return (
        <>
            <div className="title">Word Counter</div>
            <div className="card-wrapper">
                <div className="card">
                    Word <br />
                    <span>{wordCount}</span>
                </div>
                <div className="card">
                    Letter <br />
                    <span>{letterCount}</span>
                </div>
                <div className="card">
                    Paragraph <br />
                    <span>{paragraphCount}</span>
                </div>
            </div>
            <div>
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    name=""
                    id=""
                    placeholder="Enter/Paste Your Text Here"
                    cols="30"
                    rows="10"
                ></textarea>
            </div>
            <div className="buttons">
                <button onClick={handleUpperCaseClick}>
                    Click to Uppercase
                </button>
                <button onClick={handleLowerCaseClick}>
                    Click to Lowercase
                </button>
            </div>
        </>
    );
};

export default WordCounter;
