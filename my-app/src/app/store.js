import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/login/loginSlice';
import productSlice from '../features/productList/productSlice';
import salesDataSlice from '../features/productList/salesDataSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    product:productSlice,
    salesData:salesDataSlice,
    userList:userSlice
  },
});