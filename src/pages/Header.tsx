import React from 'react'
import { Link} from 'react-router-dom';
import DarkMode from '../Theme/DarkMode';



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
