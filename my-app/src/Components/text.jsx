import React, { useState } from 'react'

export default function Text({ handleChange, content, handleLowerCase, handleUpperCase }) {
    return (
        <>
            <textarea value={content} onChange={handleChange} name="" id="" cols="30" rows="10" placeholder='Input somthing...'>{handleLowerCase}</textarea>
        </>
    )
}
