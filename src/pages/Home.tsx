import React, { useEffect, useState} from 'react'
import axios from  'axios'
import { ResponseObject,Coin } from '../interfaces';
const TRENDING = 'https://api.coingecko.com/api/v3/search/trending'
const Home:React.FC= () => {
  
    const [trending, setTrending ] = useState<Coin[]>([])
    useEffect(()=>{
        axios
        .get<ResponseObject>(TRENDING)
        .then((response) => 
        {setTrending(response.data.coins); 
        console.log(response) })
        .catch(err =>
        { console.log(err); })
    },[])

    return (
        <div>  
           {trending.map((trend) => (
        <div key={trend.item.id}>{trend.item.name}</div>
      ))}
        </div>
    )
}

export default Home

