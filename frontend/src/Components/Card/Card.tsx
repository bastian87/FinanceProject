import React from 'react'
import "./Card.css"

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
  return <div className='card'>

    <img src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' alt='Image' />
    <div className='details'>
      <h2>{companyName} ({ticker})</h2>
      <p>${price}</p>
    </div>

    <p className='info'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quibusdam aliquam, ut corrupti sed,
      molestiae repellat porro reprehenderit dignissimos delectus maiores, consequatur laudantium tempore beatae cum eligendi in officia illum.
    </p>
  </div>
}

export default Card