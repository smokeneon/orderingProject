import React from 'react';
import './App.css';
import Header from './Components/common/Header';
import Home from './Page/Home'
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
