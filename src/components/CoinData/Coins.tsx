import React,  {lazy, Suspense, useEffect, useState} from 'react'
import {ICoin} from '../../interface'
import './Coins.css'
import Loading from '../../Loading/Loading';
import Pagination from "./Pagination";
import api from '../../api/api';
const CoinTable = lazy(() => import('../../components/CoinData/CoinTable'))



 export const Coins:React.FC = () => {

  const [isLoading, setIsLoading] =useState(false)
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [coinsData, setCoinsData] = useState<ICoin[]>([])

  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };
   
   

   
      
      useEffect(()=>{
        const fetchData = async () => {
          setIsLoading(true);
          const response = await api.get(`/coins/markets?&order=market_cap_desc&page=${page}&per_page=10&sparkline=false`, {
            params: {
              vs_currency: "usd",       
            },
          }); 
          setTotalPages(totalPages);
          setIsLoading(false)
          setCoinsData(response.data);
        
        };
         
      
          fetchData()
      },[page, totalPages])


    return (
        <>
          <Suspense fallback={ <Loading/>}>
          {isLoading ? (
          <Loading />    
          ):null}      
          <table className="table" width="80%">  
        <thead>
          <tr>
            <th>Cryptocurrencies</th>
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
           <Pagination
            totalPages={totalPages}
            currentPage={page}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
          </Suspense>   
         </>
    )
}





