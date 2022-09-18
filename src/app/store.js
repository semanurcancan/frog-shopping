import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/login/loginSlice';
import productSlice from '../features/productList/productSlice';
import salesDataSlice from '../features/productList/salesDataSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    product:productSlice,
    salesData:salesDataSlice,
  },
});