import React, { useEffect, useState} from 'react'
import axios from  'axios'
import { ResponseObject, Coin } from '../interfaces';
import { Link} from 'react-router-dom';
const TRENDING = 'https://api.coingecko.com/api/v3/search/trending'
const Home:React.FC= () => {
  
    const [trending, setTrending ] = useState<Coin[]>([])
    const fetchData=async()=>{
    const response= await fetch(TRENDING)
    const result = await response.json()
        setTrending(result.coins); 
        console.log(trending)
    }
    
    useEffect(()=>{
        fetchData()
    },)

    return (
        <div>  
           {trending.map((trend) => (
          <div key={trend.item.id}>{trend.item.name}
          <img src={trend.item.symbol} />
          <h1>{trend.item.market_cap_rank}</h1>
          <h2>{trend.item.thumb}</h2>
          <img src={trend.item.large} />
          </div>
          ))}
         <Link to='/coins'>Check to see the price of the other coins</Link>
        
        </div>
    )
}

export default Home

