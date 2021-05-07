import React from 'react'
import { ICoin } from '../../interface';

const Coin: React.FC <ICoin> = ({...coin}) => {
    return (
        <div key={coin.id}>
            <h1>{coin.name} </h1>
            <h2>{coin.current_price}</h2>   
            <h2>{coin.low_24h}</h2>
            <img src={coin.image} alt=''/>
            <h2>{coin.high__24}</h2>
            <h2>{coin.market_cap.toLocaleString()}</h2>
            <p>{coin.symbol}</p>
        </div>
    )
}

export default Coin
