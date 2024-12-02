import React from 'react'
import "./Card.css"

type Props = {}

const Card = (props: Props) => {
  return <div className='card'>

    <img src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' alt='Image'/>
    <div className='details'>
        <h2>AAPL</h2>
        <p>$110</p>
    </div>
    
    <p className='info'> 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quibusdam aliquam, ut corrupti sed, 
        molestiae repellat porro reprehenderit dignissimos delectus maiores, consequatur laudantium tempore beatae cum eligendi in officia illum.
    </p>
  </div>
}

export default Card