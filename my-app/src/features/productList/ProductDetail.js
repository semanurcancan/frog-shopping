import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  selectProduct, selectProductById } from './productSlice';

import './userProduct.css';

function ProductDetail() {
    const dispatch = useDispatch();
    const productInfo = useSelector(selectProduct)
    const params = useParams();
    const product = useSelector(state => selectProductById(state, params.productsId))[0]




    return (
        <div className='text-center'>
            <div className='ProductDetail'>
                <div className='cardHeader2'>
                    <h1 className=' font-bold text-xl'> {product.name}</h1>
                    <p>{product.kategori}</p>
                </div>
                <div className='detailIMG'>
                    <img src={product.img} width={350} alt='1.resim' />
                </div>
                <div className='productDetailbottom'>
                    <div className='price'>
                        <strong>Price: {product.price}</strong>
                    </div>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-3 mr-1 overflow-hidden text-sm font-medium text-gray-300 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-gray-500 dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-gray-100">
                        <span className="relative px-2 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-200 rounded-md group-hover:bg-opacity-0">
                            Add to Basket
                        </span>
                    </button>
                    <div className='flex items-start flex-col	'>
                        <a>Stock: {product.stok}</a>
                        <p>Point: {product.puan}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductDetail