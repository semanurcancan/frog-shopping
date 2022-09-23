import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Admin from './features/admin/admin'
import Home from './features/home/Home'
import ProductAdmin from './features/productList/ProductAdmin';
import ProductDetail from './features/productList/ProductDetail';
import ProductAdd from './features/productList/ProductAdd';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './features/user/User';
import { Login } from './features/login/Login';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='home' element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/product" element={<ProductAdmin />} />
        <Route path="user" element={<User />} />
        <Route path="notes" element={<Home />} />
        <Route path="productsAdd" element={<ProductAdd />} />
        <Route path="login" element={<Admin />} />
        <Route path='products/:productsId' element={<ProductDetail />} >
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>

  </Provider>
);

reportWebVitals();
