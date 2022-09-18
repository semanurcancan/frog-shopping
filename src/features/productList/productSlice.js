import { createSlice } from '@reduxjs/toolkit';

const firstState = [
    {
        name: 'NIKE ',
        id: '1',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/1.jpeg',
        color: 'white',
        price: '$100',
        stok: '10',
        puan: '7/10',
        kategori: 't-shirt'
    },
    {
        name: 'NIKE',
        id: '2',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/2.webp',
        color: 'black',
        price: '$100',
        stok: '8',
        puan: '8/10',
        kategori: 't-shirt'
    },
    {
        name: 'CHICAGO',
        id: '3',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/3.webp',
        color: 'white',
        price: '$120',
        stok: '10',
        puan: '9/10',
        kategori: 't-shirt'
    },
    {
        name: 'BROOKLYN',
        id: '4',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/4.webp',
        color: 'purple',
        price: '$60',
        stok: '15',
        puan: '6/10',
        kategori: 't-shirt'
    },
    {
        name: 'BROOKLYN',
        id: '5',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/5_org_zoom.webp',
        color: 'orange',
        price: '$70',
        stok: '8',
        puan: '6/10',
        kategori: 't-shirt'
    },
    {
        name: 'BROOKLYN',
        id: '6',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/6_org_zoom.webp',
        color: 'red',
        price: '$70',
        stok: '12',
        puan: '6/10',
        kategori: 't-shirt'
    },
    {
        name: 'BRAND',
        id: '7',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/7_org_zoom.webp',
        color: 'black',
        price: '$170',
        stok: '7',
        puan: '9/10',
        kategori: 'sweatshirt'
    },
    {
        name: 'NEW JERSEY',
        id: '8',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/8_org_zoom.webp',
        color: 'gray',
        price: '$170',
        stok: '14',
        puan: '8/10',
        kategori: 'sweatshirt'
    },
    {
        name: 'LOS ANGELES',
        id: '9',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/9_org_zoom.webp',
        color: 'gray',
        price: '$180',
        stok: '4',
        puan: '9/10',
        kategori: 'sweatshirt'
    },
    {
        name: 'QUEEN',
        id: '10',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/10_org_zoom.webp',
        color: 'black',
        price: '$370',
        stok: '23',
        puan: '9/10',
        kategori: 'dress'
    },
    {
        name: 'FOX ',
        id: '11',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/11_org_zoom.webp',
        color: 'red',
        price: '$380',
        stok: '15',
        puan: '9/10',
        kategori: 'dress'
    },
    {
        name: 'TWİST',
        id: '12',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/12_org_zoom.webp',
        color: 'red',
        price: '$470',
        stok: '23',
        puan: '10/10',
        kategori: 'dress'
    },
    {
        name: 'TWİST ',
        id: '13',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/13_org_zoom.webp',
        color: 'purple',
        price: '$370',
        stok: '4',
        puan: '8/10',
        kategori: 'dress'
    },
    {
        name: 'VAKKO ',
        id: '14',
        img: 'https://raw.githubusercontent.com/semanurcancan/image/main/productIMG/14_org_zoom.webp',
        color: 'pink',
        price: '$370',
        stok: '13',
        puan: '10/10',
        kategori: 'dress'
    }
]


export const productSlice = createSlice({
    name: 'product',
    initialState: firstState,
    reducers: {
        productInfos: (state, action) => {
            state.name = action.payload.name
            state.id = action.payload.id
            state.img = action.payload.img
            state.color = action.payload.color
            state.price = action.payload.price
            state.stok = action.payload.stok
            state.puan = action.payload.puan
            state.kategori = action.payload.kategori
        },
        productInfoSetByValue: (state, action) => { // payload = { key: '', value: '' }
            state[action.payload.key] = action.payload.value
        },
        deleteProductItem:(state, action) => { 
            let items = [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ]
            return items
        },
        addProductItem:(state, action)=>{

    return state.concat(action.payload)

        }
    }
})

export const selectProduct = (state) => {
    return state.product
}
export const selectProductById = (state, id) => {
    return state.product.filter((item)=> item.id == id)
}

export const { productInfos, productInfoSetByValue, deleteProductItem, addProductItem } = productSlice.actions

export default productSlice.reducer;