import React,  {useEffect, useState} from 'react'


import {ICoin} from '../../interface'
import Coin from './Coin'
const URL ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'



 export const Coins:React.FC = () => {

    const [coinsData, setCoinsData] = useState<ICoin[]>([])
    
    const fetchData=async()=>{
      const response= await fetch(URL)
      const result = await response.json()
          setCoinsData(result); 
          console.log(coinsData)
      }
      
      useEffect(()=>{
          fetchData()
      },)
    return (
        <div>
          {coinsData.map((coin)=>
         <Coin key={coin.id}
               {...coin}
                />
          )}
         </div>
    )
}





