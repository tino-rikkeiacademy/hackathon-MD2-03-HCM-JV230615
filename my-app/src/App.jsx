import React, { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Text from './Components/text'
import Button from './Components/Button'

export default function App() {
  const [content, setContent] = useState("");
  const [letter, setLetter] = useState(0);
  const [word, setWord] = useState(0);
  const [paragraph, setParagph] = useState(0);

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  console.log(content);

  const countWord = (text) => {
    const textSplit = text.split(" ").length;
    setWord(textSplit);
  };

  const countLetter = (text) => {
    var count = 0;

    for (var i = 0; i < text.length; i++) {
      if (text[i] !== " " && text[i] !== "\n") {
        count++;
      }
    }
    return count;

  };

  const countParagraph = (text) => {
    const lineCount = text.split("\n").length;
    return lineCount;
  };

  const handleUpperCase = (text) => {
    setContent(text.toUpperCase());
  }

  const handleLowerCase = (text) => {
    setContent(text.toLowerCase());
  }

  useEffect(() => {
    countWord(content);
    const character = countLetter(content);
    setLetter(character)
    const line = countParagraph(content);
    setParagph(line)
  }, [content]);

  return (
    <>
      <div className='wordcounter'>
        <h1> 🆒Word Counter</h1>
        <Card letter={letter} word={word} paragraph={paragraph} />
        <Text content={content} handleChange={handleChange} handleUpperCase={handleUpperCase} handleLowerCase={handleLowerCase} />
        <Button handleUpperCase={() => handleUpperCase(content)} handleLowerCase={() => handleLowerCase(content)} />
      </div>
    </>
  )
}
