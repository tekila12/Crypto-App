import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import api from "../../api/api";
const CoinDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  
    const formatData = (data: any[]) => {
      return data.map((el) => {
        return {
          t: el[0],
          y: el[1].toFixed(2),
        };
      });
    };
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        const [day, week, year, detail] = await Promise.all([
          api.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "1",
            },
          }),
          api.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "7",
            },
          }),
          api.get(`/coins/${id}/market_chart/`, {
            params: {
              vs_currency: "usd",
              days: "365",
            },
          }),
          api.get("/coins/markets/", {
            params: {
              vs_currency: "usd",
              ids: id,
            },
          }),
        ]);
        console.log(day);
  
        setCoinData({
          day: formatData(day.data.prices),
          week: formatData(week.data.prices),
          year: formatData(year.data.prices),
          detail: detail.data[0],
        });
        setIsLoading(false);
      };
  
      fetchData();
    }, []);
  
    const renderData = () => {
      if (isLoading) {
        return <div>Loading....</div>;
      }
      return (
        <div className="coinlist">
       
        </div>
      );
    };
  
    return renderData();
  };
  
  export default CoinDetailPage;
