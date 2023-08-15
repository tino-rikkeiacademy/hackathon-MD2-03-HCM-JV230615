import React from 'react'

export default function Card({ letter, word, paragraph }) {
    return (
        <>
            <div className='Card'>
                <ul>
                    <li>
                        <div>
                            <p>✍️Word</p>
                            <p>{word}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>📜Letter</p>
                            <p>{letter}</p>
                        </div>

                    </li>
                    <li>
                        <div>
                            <p>📖Paragraph</p>
                            <p>{paragraph}</p>
                        </div>

                    </li>
                </ul>
            </div>
        </>
    )
}
