import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header( { word, letter, paragraph } ) {
  return (
    <div className='h-40 w-100'>
        <h3 className='pt-2'>Word Counter</h3>
        <div className='d-flex justify-content-around pt-5' >
            
            <div className='shadow-lg rounded-4 text-white p-3 ' style={{background: 'linear-gradient(to right, #7D0AB8, #C2228C)', width:170,height:100}}>
                Word <br />
                {letter == "" ? 0 : word}
            </div>
            <div className='shadow-lg rounded-4 text-white p-3 ' style={{background: 'linear-gradient(to right, #7D0AB8, #C2228C)', width:170,height:100}}>
                Letter <br />
                {letter}
            </div>
            <div className='shadow-lg rounded-4 text-white p-3 ' style={{background: 'linear-gradient(to right, #7D0AB8, #C2228C)', width:170,height:100}}>
                Paragraph <br />
                { letter == "" ? 0 : paragraph}
            </div>
        </div>
    </div>
  )
}
