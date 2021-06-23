import React,{useState, useRef, useEffect} from 'react'
import { useHistory  } from 'react-router-dom';
import { ICoin } from '../interface';
import api from '../api/api';
import Search from './Search'
import axios from 'axios';



const SearchCoins:React.FC = () => {

const [searchValue, setSearchValue]= useState('')
const [searchCoins, setSearchCoins]= useState<ICoin[]>([])
const [isLoading, setIsLoading] = useState(false)
const ref=useRef<HTMLInputElement | null>(null);
const history = useHistory()



/*****Fetching DATA */
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
 },[])


/* Filtering the fetched data */
const filteredCoins = (searchCoins)
.filter((coin) =>
  coin.name.toLowerCase().includes(searchValue.toLowerCase())
)
.slice(0, 5);

const searchQueryPresent = searchValue.trim().length > 0;





/*Creating outsideLogicClick */


const handleSearch = (e: { target: any; }) => {
  if (ref.current && !ref.current.contains(e.target)) {
   setSearchValue('')
  }
};
   
useEffect(() => {
  document.addEventListener('click', handleSearch);
  return () => {
    document.removeEventListener('click', handleSearch);
  };
}, []);

return (
    <div ref={ref}>    
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
              <span className='search__value'>{coin.name}{" "}</span>
         
          </div>
        
        </>
        );
       })
       ))}
   
   
    </div>
)
}

export default SearchCoins