import React,{useState, useEffect} from 'react'
import { Link, useHistory  } from 'react-router-dom';
import DarkMode from '../Theme/DarkMode';
import { ICoin } from '../interface';
import SearchCoins from './SearchCoins';


const Header:React.FC = () => {  
    return (
        <div className='header__container'>
            <Link to='/'>
            <img alt ='' src='./icons/logo.png' />
            </Link>     
          <DarkMode />        
        </div>
    )
}

export default Header
