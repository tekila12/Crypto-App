import React from 'react'
import Search from './Search'
import { Link  } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header__container'>
            <Link to='/'>
            <img alt ='' src='./icons/logo.png' />
            </Link>
            <Search />
          
        </div>
    )
}

export default Header
