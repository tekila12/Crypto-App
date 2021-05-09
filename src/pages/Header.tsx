import React from 'react'
import Search from './Search'
import { Link  } from 'react-router-dom';
import DarkMode from '../Theme/DarkMode';


const Header = () => {
    return (
        <div className='header__container'>
            <Link to='/'>
            <img alt ='' src='./icons/logo.png' />
            </Link>
            <Search />
          <DarkMode />
        </div>
    )
}

export default Header
