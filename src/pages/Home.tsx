import React, { useEffect, useState} from 'react'
import axios from  'axios'
import { ResponseObject, Coin } from '../interfaces';
import { Link, useHistory} from 'react-router-dom';
import './Home.css'
const TRENDING = 'https://api.coingecko.com/api/v3/search/trending'
const Home:React.FC= () => {
    
    const history= useHistory()
    const [trending, setTrending ] = useState<Coin[]>([])
    useEffect(()=>{
        axios
        .get<ResponseObject>(TRENDING)
        .then((response) =>{
            setTrending(response.data.coins)
            console.log(response.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })



    return (
        <div className='home__container'>  
            <h1>Currently trending coins</h1>
           {trending.map((trend) => (
          <div  className='trending__container' key={trend.item.id}>{trend.item.name}
          <span>{trend.item.symbol} </span>
          <h5 className='trending__position'>{trend.item.market_cap_rank}</h5>
          <img className='trending__image' alt='' src={trend.item.large}></img> 
          </div>
          ))}
        <button onClick={()=>{history.push('/coins')}}></button>
        </div>
    )
}

export default Home

