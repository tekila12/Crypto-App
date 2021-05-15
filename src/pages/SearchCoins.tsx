import React,{useState, useEffect} from 'react'
import { useHistory  } from 'react-router-dom';
import { ICoin } from '../interface';
import api from '../api/api';
import Search from './Search'


const SearchCoins:React.FC = () => {

const [searchValue, setSearchValue]= useState('')
const [searchCoins, setSearchCoins]= useState<ICoin[]>([])
const [isLoading, setIsLoading] = useState(false)
const history = useHistory()

useEffect(()=>{
 const SearchData=async()=>{
     setIsLoading(true)
     const response= await api.get('/coins/markets/',{
         params:{
            vs_currency: "usd",   
         }
     })
     setIsLoading(false)
     setSearchCoins(response.data);
 }
 SearchData()
})

const filteredCoins = (searchCoins)
.filter((coin) =>
  coin.name.toLowerCase().includes(searchValue.toLowerCase())
)
.slice(0, 5);

const searchQueryPresent = searchValue.trim().length > 0;

return (
    <>
           <Search searchValue={searchValue}
       setSearchValue={setSearchValue}/>
        {searchQueryPresent && 
       (filteredCoins.length === 0 ? (
        <div className='search__coins'>
          Coin not found
        </div>
       ) : (
        filteredCoins.map((coin) => {
        return (
        <>
          <div className='search__coins'
            onClick={() =>history.push(`/coins/${coin.id}`, setSearchValue(''))}
            >
              {" "}
              {coin.name}{" "}
          </div>
        
        </>
        );
       })
       ))}
   
   
    </>
)
}

export default SearchCoins