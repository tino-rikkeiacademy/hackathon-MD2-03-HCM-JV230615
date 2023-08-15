import React, { useEffect, useState } from "react";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);
  const [letter, setLetter] = useState(0);
  const [paragraph, setParagraph] = useState(0);
 
  const handleChange = (e) => {
    setText(e.target.value);
  }
  console.log(text);

  const countLetter = (text) => {
    var count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " " && text[i] !== "\n") {
            count++;
        }
    }
    return count;
  }

  const countWord = (text) => {
    const textSplit = text.split(" ").length;
    return textSplit;
  }

  const countParagraph = (text) => {
    const lineCount = text.split("\n").length;
    return lineCount;
  }

  const handleUpperCase = (text) => {
    setText(text.toUpperCase());
  }

  const handleLowerCase = (text) => {
    setText(text.toLowerCase());
  }

  useEffect(() => {
    const letter = countLetter(text);
    setLetter(letter);
    const character = countWord(text);
    setWord(character);
    const line = countParagraph(text);
    setParagraph(line)
  }, [text]);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div
        className="p-2 text-center"
        style={{
          background: "linear-gradient(to right, #DF02EC, #F3B6B9)",
          height: 500,
          width: 800,
        }}
      >
        
        <Header letter={letter} word={word} paragraph={paragraph}  />

        <div className="pt-4 w-full">
          <div className="d-flex justify-content-center">
            <div>
              <textarea
                className="form-control"
                style={{
                  width: 720,
                }}
                id="textAreaExample1"
                rows={6}
                defaultValue={""}
                placeholder="Enter/Paste Your Text"
                value={text}
                onChange={(e) => handleChange(e)
                }
              />
            </div>
          </div>

          <div className="d-flex justify-content-center pt-5">
            <button
              className="rounded-4 text-white mx-2"
              style={{
                background: "#8b2be2",
                width: 170,
                height: 40,
              }}
              onClick={() => handleUpperCase(text)}
            >
              Click to Uppercase
            </button>
            <button
              className="rounded-4 text-white mx-2"
              style={{
                background: "#8b2be2",
                width: 170,
                height: 40,
              }}
              onClick={() => handleLowerCase(text)}
            >
              Click to Uppercase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
