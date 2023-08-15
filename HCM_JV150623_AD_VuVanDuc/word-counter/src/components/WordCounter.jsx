import React, {useEffect, useState} from 'react'
import Card from './shared/Card'
import Header from './shared/Header'
import Button from './shared/Button'
import '../assets/css//word-counter.css'

export default function WordCounter() {
  const [text, setText] = useState ('')

  let paragraphs = text
    .trim()
    .split("\n")
    .filter((paragraphs) => paragraphs !== '');

  let words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word !== '');
  
  let charsCount = text.length;
  let wordsCount = words.length;
  let paragraphCount =  paragraphs.length;

  const handleUpperCase = (text) => {
      let value = text.toLocaleUpperCase();
      setText(value)
  } 

  const handleLowerCase = (text) => {
    let value = text.toLowerCase();
    setText(value)
  }

  return (
    <div className="word-counter">
        <Header />
        <div className='container'>
          <div className='card-wrapper d-flex justify-content-between'>
            <Card count={wordsCount} icon={'https://images.emojiterra.com/google/android-11/512px/1f4dd.png'}>Word</ Card >
            <Card count={charsCount} icon={'https://cdn4.iconfinder.com/data/icons/language-learning-filled-color/300/101529155Untitled-3-512.png'}>Letter</ Card >
            <Card count={paragraphCount} icon={'https://cdn2.iconfinder.com/data/icons/office-257/64/signature-pen-write-writing-256.png'}>Paragraph</ Card >
          </div>
          <div className='box-paragraph'>
            <textarea 
                style={{pointerEvent : 'none'}}
                className='text-box' 
                onChange={(e) => setText(e.target.value)} 
                placeholder='Enter/Paste Your Text Here'
                value={text}
            />
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <span onClick={()=> handleUpperCase(text)}>
              <Button>Click to Uppercase</Button>
            </span>
            <span  onClick={()=> handleLowerCase(text)}>
              <Button>Click to Lowercase</Button>
            </span>
          </div>
        </div>
       
        
    </div>
  )
}
