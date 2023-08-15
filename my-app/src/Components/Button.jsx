import React from 'react'

export default function Button({ handleUpperCase, handleLowerCase, content }) {
    return (
        <>
            <div className='btn'>
                <button onClick={handleUpperCase}>Click to Uppercase</button>
                <button onClick={handleLowerCase}>Click to Lowercase</button>
            </div>
        </>
    )
}
