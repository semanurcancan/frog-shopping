import React from 'react'
import './userProduct.css';

import { useDispatch, useSelector } from 'react-redux';
import ProductCARD from './ProductCARD';

import { selectProduct } from './productSlice';
import {Link} from "react-router-dom";

function ProductList() {
  const productList = useSelector(selectProduct);
  const dispatch = useDispatch();

  return (

    productList.map((value, index) => (
      <div>
        <Link to={`/products/${value.id}`}>
              <ProductCARD  name={value.name} id={value.id} img={value.img} color={value.color} price={value.price} stok={value.stok} puan={value.puan} kategori={value.kategori} />
        </Link>

    </div>))
  )
}



export default ProductList