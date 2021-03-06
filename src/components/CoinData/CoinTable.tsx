import React from 'react'
import { ICoin } from '../../interface';
import {BsArrowUpShort} from 'react-icons/bs'
import {BsArrowDownShort} from 'react-icons/bs'
import { useHistory } from 'react-router-dom';




const CoinTable: React.FC <ICoin> = ({...coin}) => {

   const history= useHistory()
    return (
        <div className="table__container">
        <table onClick={() =>history.push(`/coins/${coin.id}`)}className="table" width="80%">     
        <tbody id={coin.id}>           
            <tr>
            <td className='table__overflow'><span className='table__content '>{coin.market_cap_rank}.
            <img className='table__img' src={coin.image} alt=''/> {coin.name}</span> </td>
            <td className='table__overflow'><span className='table__content '>${coin.current_price.toLocaleString()}</span></td>   
            <td className='table__overflow'> <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text__danger"
              : "text__success"
          }
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <BsArrowDownShort className="arrow__up"></BsArrowDownShort>
          ) : (
            <BsArrowUpShort className="down__arrow"></BsArrowUpShort>
          )}
          {coin.price_change_percentage_24h.toFixed(3)}%
         </span></td>
            <td className='removed'><span className='table__content '>{coin.market_cap.toLocaleString()}</span></td>
            </tr>       
        </tbody>
        </table>
        </div>
    )
}

export default CoinTable
