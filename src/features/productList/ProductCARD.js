import React from 'react'

import './userProduct.css';

function ProductCARD(props) {

    return (

        <div className='productCard'>
            <div className='cardHeader'>
                <h1 className=' font-bold text-xl'> {props.name}</h1>
                <p>{props.kategori}</p>
            </div>
            <div className='cardIMG'>
                <img src={props.img} width={150} alt='1.resim' />
            </div>
            <div className='flex justify-between	'>
                <div className='price'>
                    <p>price</p>
                    <strong>{props.price}</strong>
                </div>
                <div>
                    <a>{props.stok}</a>
                    <p>{props.puan}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCARD