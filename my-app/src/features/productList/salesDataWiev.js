import React from 'react'
import {  useSelector } from 'react-redux';
import './userProduct.css';
import { SelectSale } from './salesDataSlice';
import BarChart from '../chart/BarChart';
import './userProduct.css';

Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(), 0, 1);
  var millisecsInDay = 86400000;
  return Math.ceil((((this - onejan) / millisecsInDay) + onejan.getDay() + 1) / 7);
};

function SalesDataWiev(props) {
  const salesList = useSelector(SelectSale);
  console.log(salesList)
  let newList=salesList.map(value=>{
    let date=new Date (value.date)
    if(props.dateType==1){
      return {date: `week ${date.getWeek()}`,price:value.price}
    }else if(props.dateType== 2){
      return {date: `${date.getMonth()} ${date.getFullYear()}` ,price:value.price}
    }
    return value
  })

  return (
    
    <div>
      <BarChart salesList={newList} />
    </div>
  )
}

export default SalesDataWiev