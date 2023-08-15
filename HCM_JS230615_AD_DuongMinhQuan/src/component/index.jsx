import React, { useState, useEffect } from "react";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AbcIcon from "@mui/icons-material/Abc";

import "./index.css";

export default function App() {
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [paraCount, setParaCount] = useState(0);

  const [inputText, setInputText] = useState("");

  const handleInputChange = (newValue) => {
    setInputText(newValue);
    updateCounts(newValue);
  };

  const updateCounts = (text) => {
    const charCount = text.length;
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    const paraCount = text
      .split("\n")
      .filter((para) => para.trim() !== "").length;

    setCharCount(charCount);
    setWordCount(wordCount);
    setParaCount(paraCount);
  };

  const handleUpperCase = () => {
    const upperCaseText = inputText.toUpperCase();
    setInputText(upperCaseText);
  };

  const handleLowerCase = () => {
    const lowerCaseText = inputText.toLowerCase();
    setInputText(lowerCaseText);
  };
  return (
    <div className="container">
      <div className="container-app">
        <div className="container-header">
          <h1 className="title">
            {" "}
            <AbcIcon fontSize="large" />
            WORD COUNTER
          </h1>
          <div className="container-count">
            <div className="counter">
              <p>
                <NoteAltIcon />
                Word
              </p>
              <span className="word-count">{wordCount}</span>
            </div>
            <div className="counter">
              <p>Letter</p>
              <span className="letter-count">{charCount}</span>
            </div>
            <div className="counter">
              <p>Paragraph</p>
              <span className="Para-count">{paraCount}</span>
            </div>
          </div>
          <div className="input-word">
            <textarea
              className="input"
              placeholder="Mời nhập chuỗi ký tự"
              value={inputText}
              onChange={(e) => handleInputChange(e.target.value)}
              name=""
              id=""
              cols="80"
              rows="10"
            ></textarea>
          </div>
          <div className="footer">
            <button className="btn" onClick={handleUpperCase}>
              Click to UPPER
            </button>
            <button className="btn" onClick={handleLowerCase}>
              Click to LOWER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
