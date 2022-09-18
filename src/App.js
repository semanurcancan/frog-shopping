import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from './features/login/Login';
import { selectUser } from './features/login/loginSlice';
import ProductList from './features/productList/ProductList';
import './app.css';
import ProductCARD from './features/productList/ProductCARD';
import { selectProduct } from './features/productList/productSlice';
import Dashboard from './features/dashboard/Dashboard';

import Navbar from './features/productList/navbar'




function App() {
  const userInfo = useSelector(selectUser)


  return (
    <main className="App">
      <header className="App-header ">
        <Navbar />
        <div className='userproduct'>
          <ProductList />
        </div>
      </header>
    </main>
  );
}


export default App;