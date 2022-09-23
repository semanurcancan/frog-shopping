import React from 'react'
import { Link } from "react-router-dom";
import './userProduct.css';

function Navbar() {
    return (
        <div>
            <div >
                <div className='  h-20	bg-emerald-100 shadow-lg shadow-emerald-200 flex place-content-between	 '>
                    <div className='m-4 flex items-center	'>
                        <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-frog-jungle-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
                         className='h-10 w-10' alt="..." />
                        <h1 className='text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500/50 to-violet-500 '>shopping and more</h1>
                    </div>

                    <li className='link'><Link className='items-center mt-6' to="/login">
                        <button className='bg-green-200 hover:bg-emerald-200 hover:text-white text-green-400/75 text-center py-2 px-2 rounded-2xl'>ADMIN LOGIN</button>
                    </Link></li>

                </div>

            </div>

        </div>
    )
}

export default Navbar