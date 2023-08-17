import React, { useEffect, useState } from 'react'

export default function WordCounter() {
  const [content, setContent] = useState('');
  const [letter, setLetter] = useState(0);
  const [word, setWord] = useState(0);
  const [paragraph, setParagraph] = useState(0);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const countLetters = (text) => {
    const splitText = text.split(" ").length;
    setLetter(splitText);
  };

  const countWords = (text) => {
    var count = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i] !== " " && text[i] !== "\n") {
        count++;
      }
    }
    return count;
  }

  const countParagraphs = (text) => {
    const countLine = text.split("\n").length;
    return countLine;
  }

  const handleUpperCase = (text) => {
    setContent(text.toUpperCase());
  }

  const handleLowerCase = (text) => {
    setContent(text.toLowerCase());
  }
  useEffect(() => {
    countLetters(content);
    const characters = countWords(content);
    setWord(characters)
    const line = countParagraphs(content);
    setParagraph(line)
  }, [content]);
  return (
    <>
      <div style={{
        width: '500px',
        height: '400px',
        margin: 'auto',
        marginTop: '20px',
        background: 'linear-gradient(to right, #e002ec68, #f3b6b9db)',
        textAlign: 'center',
        fontSize: '20px',
        color: 'black',
      }}>
        Word Counter
        <div style={{
          width: '100%',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: "30px",
          color: 'white'
        }}>

          <div style={{
            width: '100px',
            height: "50px",
            background: 'linear-gradient(to right, #7D0AB8, #C2228C)',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <div >Letter</div>
            <div>{word}</div>
          </div>
        
          <div style={{
            width: '100px',
            height: "50px",
            background: 'linear-gradient(to right, #7D0AB8, #C2228C)',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <div >Word</div>
            <div>{letter}</div>
          </div>

          <div style={{
            width: '100px',
            height: "50px",
            background: 'linear-gradient(to right, #7D0AB8, #C2228C)',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <div >Paragraph</div>
            <div>{paragraph}</div>
          </div>
        </div>
        <textarea
          placeholder='Type/Paste your text here' rows={12} cols={60}
          value={content}
          onChange={handleChange}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '50px',
          marginTop: '20px'
          }}>
          <button style={{
            background: '#7D0AB2',
            color:'white',
            borderRadius: '2px',
            padding: '5px'
          }} onClick={() => handleUpperCase(content)}>Click to UpperCase</button>

          <button style={{ 
          background: '#7D0AB2',
          color: 'white',
          borderRadius: '2px',
          padding: '5px' 
          }} onClick={() => handleLowerCase(content)}>Click to LowerCase</button>
        </div>

      </div>
     
    </>

  )
}
