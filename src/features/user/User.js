//müşteri listesi
import React, { Component } from 'react'
import "./user.css";
import Dashboard from '../dashboard/Dashboard'

export class User extends Component {
  render() {
    return (
      <div className="user">
      <Dashboard />
      <div className="userContainer"> müşteri verileri , listesi.vs
     
      </div>
  
    </div>
    )
  }
}

export default User