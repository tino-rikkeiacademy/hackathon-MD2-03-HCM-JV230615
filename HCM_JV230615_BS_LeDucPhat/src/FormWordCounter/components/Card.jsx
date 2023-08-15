import './Card.css'

export default function Card({title, result}) {
  return (
    <div className='card'>
        <p >{title}</p>
        <span>{result}</span>
    </div>
  )
}
