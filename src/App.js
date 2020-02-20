import React from 'react';
import './App.css';
import Header from './Components/common/Header';
import Home from './Page/Home';
import ShoppingCart from './Page/ShoppingCart';
import ForgetPassword from './Page/ForgetPassword';
import SingleFoodDetails from './Page/SingleFoodDetails';
import UserInformation from './Page/UserInformation';
import Admin from './Page/Admin';
import AdminLogin from './Page/AdminLogin';
import { HashRouter, Route } from 'react-router-dom';
// import { HashRouter, Route, Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path='/u' component={Header}></Route>
        <Route path='/u' exact component={Home} ></Route>
        <Route path='/u/shoppingCart' exact component={ShoppingCart}></Route>
        <Route path='/u/forget' exact component={ForgetPassword}></Route>
        <Route path='/u/foodDetail' exact component={SingleFoodDetails}></Route>
        <Route path='/u/me' exact component={UserInformation}></Route>
        <Route path='/a' exact component={Admin}></Route>
        <Route path='/a/login' exact component={AdminLogin}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
