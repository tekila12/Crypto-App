import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import  Home  from './pages/Home';
import { Coins } from './components/CoinData/Coins';
import Header from './pages/Header';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch> 
         <Route path='/coins' component={Coins}/>
         <Route exact={true} path='/' component={Home}/>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
