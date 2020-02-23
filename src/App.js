import React from 'react';
import './App.css';
import Header from './Components/common/Header';
import Home from './Page/Home';
import ShoppingCart from './Page/ShoppingCart';
import ForgetPassword from './Page/ForgetPassword';
import SingleFoodDetails from './Page/SingleFoodDetails';
import UserInformation from './Page/UserInformation';
import AdminHome from './Page/Backstage/AdminHome';
import AdminLogin from './Page/Backstage/AdminLogin';
import ClassifyAdmin from './Page/Backstage/ClassifyAdmin';
import DataStatistics from './Page/Backstage/DataStatistics';
import DishesList from './Page/Backstage/DishesList';
import DishesAdd from './Page/Backstage/DishesAdd';
import OrdersAdmin from './Page/Backstage/OrdersAdmin';
import UserAdmin from './Page/Backstage/UserAdmin';
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
        <Route path='/a' exact component={AdminHome}></Route>
        <Route path='/a/login' exact component={AdminLogin}></Route>
        <Route path='/a/classify' exact component={ClassifyAdmin}></Route>
        <Route path='/a/statistics' exact component={DataStatistics}></Route>
        <Route path='/a/disheslist' exact component={DishesList}></Route>
        <Route path='/a/dishesadd' exact component={DishesAdd}></Route>
        <Route path='/a/orders' exact component={OrdersAdmin}></Route>
        <Route path='/a/user' exact component={UserAdmin}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
