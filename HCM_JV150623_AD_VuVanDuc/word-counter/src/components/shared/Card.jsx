import React, { Children } from 'react'
import '../../assets/css/word-counter.css'

const Card = ({children, count, icon}) => {
  return (
    <div className='card'>
      <div className='sub-heading'>
        <img className='img' src={icon} alt="" />
        <span className='sub-heading'>{children}</span>
      </div>
      <div className='text-white mt-3'>
            {count} {children}
      </div>
    </div>
  )
}
export default Card