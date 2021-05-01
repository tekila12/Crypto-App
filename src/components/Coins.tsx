import React,  {useEffect, useState} from 'react'
import axios from 'axios';

import {ICoin} from '../interface'
import Coin from './Coin'
const URL ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'


 export const Coins:React.FC = () => {

    const [coinsData, setCoinsData] = useState<ICoin[]>([])
    
    useEffect(() => {
        axios
         .get<ICoin[]>(URL)
         .then((response) => {
           console.log(response.data)
           setCoinsData(response.data)
      })
        }, [])
    return (
        <div>
          {coinsData.map((coin)=>
         <Coin key={coin.id}
                name={coin.name}
                id={coin.id}
                current_price={coin.current_price}
                symbol={coin.symbol}
                low_24h={coin.low_24h}
                high__24={coin.high__24}
                image={coin.image}
                />
          )}
         </div>
    )
}





