import React from 'react'
import { ICoin } from '../interface';

const Coin: React.FC <ICoin> = ({name, current_price, id, symbol, low_24h,high__24, image}) => {
    return (
        <div key={id}>
            <h1>{name} </h1>
            <h2>{current_price}</h2>
            <img className='crypto__image' src={symbol} alt=''/>
            <h2>{low_24h}</h2>
            <h2>{high__24}</h2>
            <img src={image} alt='' />
        </div>
    )
}

export default Coin
