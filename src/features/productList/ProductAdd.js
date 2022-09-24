import React from 'react'
import './userProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { selectProduct, addProductItem, deleteProductItem } from './productSlice';
import { Link } from "react-router-dom";
import Dashboard from '../dashboard/Dashboard';

function ProductAdd(props) {
  const selectOption = useRef(null);
  const imgInput = useRef(null);
  const valueInput = useRef(null);
  const stockInput = useRef(null);
  const puanInput = useRef(null);
  const kategoriInput = useRef(null);
  
  const productList = useSelector(selectProduct);
  const dispatch = useDispatch();

  const addProduct = () => {
    
    let product = {
      name: selectOption.current.value,
      id: 'id-'+productList.length+5,
      img: imgInput.current.value,
      price: '$'+valueInput.current.value,
      stock: stockInput.current.value,
      puan: puanInput.current.value,
      kategori: kategoriInput.current.value,
    }
    dispatch(addProductItem(product))
  }


  const deleteItem = (index) => {
    dispatch(deleteProductItem(index))
  };


  return (
    <div className='productAddContainer'>
      <Dashboard />
      <div className='admin-product'>
        <div className='items-center border-2 shadow-md pt-3 rounded-2xl border-emerald-100/75 grid grid-cols-3 gap-4 mt-4 h-auto mb-5 sm:mt-8 md:h-20 md:flex md:justify-evenly 
        hover:border-emerald-200	shadow-emerald-300 justify-items-center		'>
          <label>
            <select className="rounded-md border-1 focus:outline-none shadow-xl bg-white w-20 h-10" ref={selectOption}>
              <option value="NIKE" >NIKE</option>
              <option value="TWİST">TWİST</option>
              <option value="QUEEN">QUEEN</option>
              <option value="BROOKLYN">BROOKLYN</option>
              <option value="NEW JERSEY">NEW JERSEY</option>
              <option value="BRAND">BRAND</option>
              <option value="LOS ANGELES">LOS ANGELES</option>
              <option value="VAKKO">VAKKO</option>

            </select>
          </label>
          <input className="rounded-md border-1 focus:outline-none shadow-xl bg-white w-20 h-10 " ref={imgInput} type="img" name="img" placeholder="IMG" />
          <input className="rounded-md border-1 focus:outline-none  shadow-xl bg-white  w-20 h-10" ref={valueInput} type="number" name="price" placeholder="Price.." />
          <input className="rounded-md border-1 focus:outline-none  shadow-xl bg-white w-20 h-10" ref={stockInput} type="number" name="Stock.." placeholder="Stock.." />
          <input className="rounded-md border-1 focus:outline-none  shadow-xl bg-white w-20 h-10" ref={puanInput} type="number" name="Puan.." placeholder="Puan.." />
          <label>
            <select className="rounded-md border-1 focus:outline-none shadow-xl bg-white w-20 h-10" ref={kategoriInput}>
              <option value="t-shirt" >t-shirt</option>
              <option value="sweatshirt">sweatshirt</option>
              <option value="dress">dress</option>
            </select>
          </label>
          <button className="col-span-3 bg-transparent hover:bg-gray-200 text-green-300 font-semibold hover:text-white h-10 w-14 md:py-2 md:px-4 border border-green-200 hover:border-transparent rounded md:h-10" type="button" value="ekle" onClick={() => addProduct()}>ADD</button>
        
        </div>
        <div>
          <div>
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

                        <Link to={`/products/${value.id}`}>
                          <button className="btn1">
                            <span>
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

      </div>
    </div>
  )
}

export default ProductAdd