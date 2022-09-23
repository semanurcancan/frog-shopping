import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userInfos } from './loginSlice';
import Home from '../home/Home'
import './login.css';

export function Login() {
    const dispatch = useDispatch();
    const name = useRef(null);
    const password = useRef(null);

    const checkLogin = () => {
        if (name.current.value == "test" && password.current.value == "test") {
            dispatch(userInfos({ login: true }))
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            checkLogin()
        }
    }

    return (
        <div className='allpage '>
            <div className='login '>
                <div className='flex flex-col justify-center bg-green-100'>
                    <a className=' text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-500'>ADMIN LOGIN</a>
                    <ul>
                        <li><input placeholder='Full Name' className='text-sm focus: outline-none focus:outline-gray-200' type="text" onKeyDown={handleKeyDown} ref={name} /></li>
                        <li><input placeholder='Password' className='text-sm focus: outline-none focus:outline-gray-200' type="password" onKeyDown={handleKeyDown} ref={password} /></li>
                        <br></br>
                        <li><button className='bg-white  text-gray-800 font-semibold py-1 px-2 border border-gray-200 focus:outline-gray-200 rounded shadow text-xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-500'
                            onClick={() => checkLogin()}>Submit</button></li>
                    </ul>
                </div>
                <div className='  justify-center items-center	bg-green-200 grid content-center	'>
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-frog-jungle-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" className='frog' alt="..." />
                    <div className='textlogin'>
                        <h4 className=' text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-500'>FROG SHOPPING</h4>
                        <h3 className='text-gray-600/30'>shopping and more</h3>
                    </div>
                </div>


            </div>
        </div>
    )
}