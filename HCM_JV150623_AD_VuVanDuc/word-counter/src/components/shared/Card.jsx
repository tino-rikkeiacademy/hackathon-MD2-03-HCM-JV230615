import React, { Children } from 'react'
import '../../assets/css/word-counter.css'

const Card = ({children, count}) => {
  return (
    <div className='card'>
      <div className='sub-heading'>
        <img className='img' src="https://images.emojiterra.com/google/android-11/512px/1f4dd.png" alt="" />
        <span className='sub-heading'>{children}</span>
      </div>
      <div className='text-white mt-3'>
            {count} {children}
      </div>
    </div>
  )
}
export default Card