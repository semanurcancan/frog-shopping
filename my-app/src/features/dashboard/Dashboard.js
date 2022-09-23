import './dashboard.css';

import { HiOutlineHome} from 'react-icons/hi';
import { GiClothes} from 'react-icons/gi';
import { TbUsers} from 'react-icons/tb';
import { TbTruckLoading} from 'react-icons/tb';
import {GrNotes} from 'react-icons/gr';
import {DiBintray} from 'react-icons/di';
import {GiMailbox} from 'react-icons/gi';


import { Outlet, Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <div className='dashboard'>
                <div className='frog-title'>
                    <img className='frog-das' src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-frog-jungle-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt="..." />
                    <a className='D-title'>DASHBOARD</a>
                </div>

                <div>
                    <ul className='Link'>
                        <li className='link'><Link className='flex' to="/home"> <HiOutlineHome/> Home</Link></li>
                        <li className='link'><Link className='flex' to="/admin/product"><GiClothes/> Product</Link></li>
                        <li className='link'><Link className='flex' to="/user">< TbUsers/>Customer</Link></li>
                        <li className='link'><Link className='flex' to="/*"><GiMailbox/>Contact</Link></li>
                        <li className='link'><Link className='flex' to="/*"><TbTruckLoading/>Stocks</Link></li>
                        <li className='link'><Link className='flex' to="/*"><GrNotes/>Notes</Link></li>
                        <li className='link'><Link className='flex' to="/*"><DiBintray/>Suppliers</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default Dashboard;