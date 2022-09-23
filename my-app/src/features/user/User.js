import "./user.css";
import Dashboard from '../dashboard/Dashboard'

import { useDispatch, useSelector, useEffect } from "react-redux";
import { fetchUser } from './userSlice';
import React from 'react'

function User() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('state', state);
  if (state.userList.data == null) {
    dispatch(fetchUser())
  }

  return (
    <div className="user">
      <Dashboard />
      <div className="userContainer">
        <a className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-500">TOP SHOPPERS</a>
        {
          state.userList.data && state.userList.data.map((e) => (
            <div className="userList">
              <div>{e.name}</div>
              <div>UserName: {e.username}</div>
              <div>{e.email}</div>
              <div>City: {e.address.city}</div>

            </div>

          ))
        }
      </div>

    </div>
  )
}

export default User