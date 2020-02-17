import React from 'react';
import './App.css';
import Header from './Components/common/Header';
import Home from './Page/Home';
import ShoppingCart from './Page/ShoppingCart';
import ForgetPassword from './Page/ForgetPassword';
import SingleFoodDetails from './Page/SingleFoodDetails';
import UserInformation from './Page/UserInformation';
import { HashRouter, Route } from 'react-router-dom';
// import { HashRouter, Route, Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Route path='/' exact component={Home} ></Route>
        <Route path='/shoppingCart' exact component={ShoppingCart}></Route>
        <Route path='/forget' exact component={ForgetPassword}></Route>
        <Route path='/foodDetail' exact component={SingleFoodDetails}></Route>
        <Route path='/me' exact component={UserInformation}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
