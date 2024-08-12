import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";

export const menuSlice = createSlice({
  name: 'menu',
  initialState: data.menu,
  reducers: {

  }  
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) { return [...state, action.payload] },
    removeFromCart(state, action) { return state.filter((el) => action.payload !== el.id) }
  }
})

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  }
})