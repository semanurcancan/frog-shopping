import "./home.css";
import React, { useState } from 'react';
import SalesDataWiev from "../productList/salesDataWiev";

import Dashboard from '../dashboard/Dashboard'
import Doughnutt from "../chart/DoughnutChart";
import SwiperLine from "./footer";
import VerticalChart from "../chart/VerticalChart";
import { Bar } from "react-chartjs-2";
import BarChart from "../chart/BarChart";

function Home(props) {
    const [dateType, setDateType]=useState(0)
    const selectedDate =()=>{

    }
    return (
        <div className="home">
            <Dashboard />
            <div>
                <div className="shadow-lg shadow-emerald-200 order-2 w-full font-extralight  flex justify-around	">
                    <button className="p-4 relative rounded-2xl	duration-500 h-18" onClick={()=>setDateType(0)}>DAILY</button>
                    <button className="p-4 relative rounded-2xl	duration-500"  onClick={()=>setDateType(1)}>WEEKLY</button>
                    <button className="p-4 relative rounded-2xl	duration-500" onClick={()=>setDateType(2)}>MONTHLY</button>
                </div>
                <div className="homeContainer">
                    <div className="totalCard">
                        <div className=" totalCardStyle ">
                            <h1 className="totalTitle">Total Customer</h1>
                            <p>1329</p>
                        </div>
                        <div className=" totalCardStyle ">
                            <h1 className="totalTitle">Total Order</h1>
                            <p className=" font-extrabold">%64</p>
                        </div>
                        <div className=" totalCardStyle">
                            <h1 className="totalTitle">Total Product Categori</h1>
                            <p> 4</p>
                        </div>
                        <div className=" totalCardStyle">
                            <h1 className="totalTitle">Total product brand</h1>
                            <p>32</p>
                        </div>
                    </div>
                    <div className="mt-4 lg:col-span-2 xl:col-span-2">
                        <h1 className="text-center">Time Based Sales Data</h1>
                        <SalesDataWiev  dateType={dateType} />
                    </div>
                    <div className="mt-4 md:col-span-1 lg:col-span-2 xl:col-span-2" >
                        <h1 className="text-center">Export Countries</h1>
                        <Doughnutt />
                    </div>
                    <div className="mt-4 md:col-span-1 lg:col-span-2 xl:col-span-2 ">
                    <h1 className="text-center">Import Export Balance</h1>
                        <VerticalChart/>
                    </div>
                    
                    <div className="col-span-full mt-10 mb-4 ">
                        <h1 className=" text-center">TOP 14 PRODUCTS</h1>
                        <SwiperLine />
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Home;