

import React, { useEffect, useState} from 'react'

/*import axios from  'axios'
import { ResponseObject } from '../interfaces';
const TRENDING = 'https://api.coingecko.com/api/v3/search/trending'
const Home:React.FC= () => {
  
    const [trending, setTrending ] = useState<ResponseObject[]>([])
    useEffect(()=>{
        axios
        .get<ResponseObject[]>(TRENDING)
        .then((response) => 
        { setTrending(response.data); 
        console.log(response) })
        .catch(err =>
        { console.log(err); })
    },[])

    return (
        <div>  
           {trending[0].coins?.map((trend)=>{
           return <div >{trend.item.name}
          </div>;
          })}
        </div>
    )
}

export default Home

*/