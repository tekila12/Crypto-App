import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import  Home  from './pages/Home';
import { Coins } from './components/CoinData/Coins';
import Header from './pages/Header';
import CoinDetail from './components/CoinData/CoinDetail';
import SearchCoins from './pages/SearchCoins';


const App = () => {
  return (
    <div>  
      <Router>
        <Header />
        <SearchCoins />
        <Switch>       
        <Route path='/coins/:id' component={CoinDetail}/>
         <Route path='/coins' component={Coins}/>
         <Route  path='/' component={Home}/>
        </Switch>
      </Router> 
      
    </div>
  );
}

export default App;





