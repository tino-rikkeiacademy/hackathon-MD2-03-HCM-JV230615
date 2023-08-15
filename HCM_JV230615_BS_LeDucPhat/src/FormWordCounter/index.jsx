import "./index.css";
import { useState } from "react";
import Card from "./components/Card";

export default function FormWordCounter() {
    const [text, setText] = useState("");

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
        <div className="form">

            <div className="title">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-abcd-input-latin-letters-lowercase-37830.png"/>
                Word Counter
            </div>

            <div className="card-wrapper">
                <Card title={"Word"} result={wordCount} />
                <Card title={"Letter"} result={letterCount}/>
                <Card title={"Paragraph"} result={paragraphCount} />
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
                <button onClick={handleUpperCaseClick}>Click to Uppercase</button>
                <button onClick={handleLowerCaseClick}>Click to Lowercase</button>
            </div>
        </div>
    );
}
