import React, { useEffect, useState} from 'react'
import {  Coin } from '../interfaces';
import {  useHistory} from 'react-router-dom';
import Loading from '../Loading/Loading';
import './Home.css'
import api from '../api/api';
import axios from 'axios';

const Home:React.FC= () => {
    
    /*fetching data */ 
    const history= useHistory()
    const [isLoading, setIsLoading] = useState(false);
    const [trending, setTrending ] = useState<Coin[]>([])
    useEffect(()=>{
      const fetchData = async () => {
          setIsLoading(true);
          const response = await api.get("/search/trending", {
              params: {      
                },
              });
              setTrending(response.data.coins);
              setIsLoading(false);
              console.log(response)
            };
          fetchData()
      },[])

  



    return (
        <div className='home__container'>  
          {isLoading ? (
           <Loading />
          ):null}      
            <h1>Currently trending coins</h1>
           {trending.map((trend) => (
          <div  className='trending__container' key={trend.item.id}>{trend.item.name}
          <span className='trending__symbol'>{trend.item.symbol} </span>
          <h5 className='trending__position'>{trend.item.market_cap_rank}</h5>
          <img className='trending__image' alt='' src={trend.item.large}></img> 
          <h4>{trend.item.price_btc.toFixed(4)}</h4>
          </div>
          ))}
          <div>
              /* pushing params to a coins Component */
          <button className='trending__button' onClick={()=>{history.push('/coins')}}>More coins...</button>
          </div>
        </div>
    )
}

export default Home

