import React,  {lazy, Suspense, useEffect, useState} from 'react'
import {ICoin} from '../../interface'
import './Coins.css'
const CoinTable = lazy(() => import('../../components/CoinData/CoinTable'))

const URL ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'

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
        <>
          <Suspense fallback={<div>Loading...</div>}>
          <table className="table" width="80%">  
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Price</th>
            <th>24H Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        </table>
          {coinsData.map((coin)=>
         <CoinTable key={coin.id}
               {...coin}
                />
          )}
          </Suspense>   
         </>
    )
}





