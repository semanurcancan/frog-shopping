import { createSlice } from '@reduxjs/toolkit';

const salesDataList = [
    {
        date: '10/01/2022',
        price: '$200'
    },
    {
        date: '10/01/2022',
        price: '$300'
    },
    {
        date: '10/02/2022',
        price: '$100'
    },
    {
        date: '10/03/2022',
        price: '$150'
    },
    {
        date: '10/03/2022',
        price: '$80'
    },
    {
        date: '10/04/2022',
        price: '$200'
    },
    {
        date: '10/05/2022',
        price: '$500'
    },
    {
        date: '10/05/2022',
        price: '$200'
    },
    {
        date: '10/06/2022',
        price: '$230'
    },
    {
        date: '10/07/2022',
        price: '$290'
    },
    {
        date: '10/07/2022',
        price: '$320'
    },
    {
        date: '10/07/2022',
        price: '$20'
    },
    {
        date: '10/08/2022',
        price: '$420'
    },
    {
        date: '10/09/2022',
        price: '$200'
    },
    {
        date: '10/09/2022',
        price: '$230'
    },
    {
        date: '10/10/2022',
        price: '$200'
    },
    {
        date: '10/11/2022',
        price: '$300'
    },
    {
        date: '10/12/2022',
        price: '$250'
    },
    {
        date: '10/13/2022',
        price: '$200'
    },
    {
        date: '10/14/2022',
        price: '$98'
    },
    {
        date: '10/15/2022',
        price: '$200'
    },
    {
        date: '10/15/2022',
        price: '$200'
    },
    {
        date: '10/16/2022',
        price: '$200'
    },
    {
        date: '10/17/2022',
        price: '$600'
    },
    {
        date: '10/17/2022',
        price: '$800'
    },
    {
        date: '10/18/2022',
        price: '$200'
    },
    {
        date: '10/18/2022',
        price: '$600'
    },
    {
        date: '10/19/2022',
        price: '$200'
    },
    {
        date: '10/20/2022',
        price: '$800'
    },
    {
        date: '10/21/2022',
        price: '$700'
    },
    {
        date: '10/23/2022',
        price: '$700'
    },
    {
        date: '10/24/2022',
        price: '$900'
    },
    

]
export const SalesDataSlice = createSlice({
    name: 'sale',
    initialState: salesDataList,
    reducers: {
        saleInfos: (state, action) => {
            state.date = action.payload.date
            state.price = action.payload.price
        },
        saleInfoSetByValue: (state, action) => { // payload = { key: '', value: '' }
            state[action.payload.key] = action.payload.value
        }
    }
})

export const SelectSale = (state) => {
    
    return state.salesData
}



export const { saleInfos, saletInfoSetByValue } = SalesDataSlice.actions

export default SalesDataSlice.reducer;