import React from 'react'
import './userProduct.css';
import Dashboard from '../dashboard/Dashboard'

import { useDispatch, useSelector } from 'react-redux';
import { selectProduct, selectProductById, deleteProductItem } from './productSlice';
import { Link } from "react-router-dom";


function ProductAdmin() {
  const productList = useSelector(selectProduct);
  const dispatch = useDispatch();
  const deleteItem = (index) => {
    dispatch(deleteProductItem(index))
  };


  return (
    <div className='productAddContainer'>
      <Dashboard />

      <div className='admin-product'>
        <div className='text-center'>
          <Link to={`/productsAdd`}>
            <button className=' bg-green-100 bg-gradient-to-r from-green-500 to-violet-500  text-center p-3 mt-10 text-xl
              bg-clip-text text-transparent'>
                <span className=''>Add to  New Product</span>
              
            </button>
          </Link>
        </div>
        <div className='product-list'>
          {productList.map((value, index) => (
            <div key={index}>
              <div >
                <div>
                  <div className='settingsList'>
                    <div>{value.name}</div>
                    <div>{value.price}</div>
                    <div className='flex flex-wrap justify-center'>
                      <div className='w-1/2 sm:w-4/12 '>
                        <Link to={`/products/${value.id}`}>
                          <img className='shadow-lg rounded-full max-w-full h-auto align-middle border-none' src={value.img} width={50} alt='1.resim' />
                        </Link>
                      </div>
                    </div>
                    <button
                      className="btn1">
                      <Link to={`/productsAdd`}>
                        <button> EDIT</button>
                      </Link>
                    </button>
                    <Link to={`/products/${value.id}`}>
                      <button className="btn1">
                        <span className="">
                          VIEW
                        </span>
                      </button>
                    </Link>
                    <button onClick={() => deleteItem(index)}
                      className="btn1">
                      <span className="">
                        DELETE
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>))
          }
        </div>
      </div>
    </div>

  )
}

export default ProductAdmin