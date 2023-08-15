import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WordCounter = () => {
  const [inputText, setInputText] = useState("");

  const countWords = (text) => {
    if (text.trim() === "") {
      return 0;
    }
    const words = text.trim().split(/\s+/);
    return words.length;
  };
  const wordCount = countWords(inputText);
  const letterCount = inputText
    .split("")
    .filter((char) => char !== " " && char !== "\n").length;
  const paragraphCount = inputText.split("\n").filter((para) => para !== "").length;

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };
  const handleUpperCaseClick = () => {
    const uppercaseText = inputText.toUpperCase();
    setInputText(uppercaseText);
  };

  const handleLowerCaseClick = () => {
    const lowercaseText = inputText.toLowerCase();
    setInputText(lowercaseText);
  };
  
  return (
    <>
      <div className="title">Word Counter</div>
      <div className="card-wrapper">
        <div className="card">
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
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
          value={inputText}
          onChange={handleTextChange}
          placeholder="Enter/Paste Your Text Here"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="buttons">
        <button onClick={handleUpperCaseClick}>Convert to Uppercase</button>
        <button onClick={handleLowerCaseClick}>Convert to Lowercase</button>
      </div>
    </>
  );
};

export default WordCounter;
