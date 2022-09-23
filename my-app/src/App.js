import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/login/loginSlice';
import ProductList from './features/productList/ProductList';
import './app.css';

import Navbar from './features/productList/navbar'

function App() {
  const userInfo = useSelector(selectUser)

  return (
    <main className="App">
      <div className="App-header ">
        <Navbar />
        <div className='userproduct'>
          <ProductList />
        </div>
      </div>
    </main>
  );
}


export default App;