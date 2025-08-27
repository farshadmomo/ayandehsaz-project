import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState: ProductState = {
  items: [
    { id: uuid(), name: "موبایل سامسونگ", price: 12000000, stock: 5 },
    { id: uuid(), name: "لپ‌تاپ لنوو", price: 35000000, stock: 2 },
    { id: uuid(), name: "هدفون سونی", price: 2500000, stock: 10 },
    { id: uuid(), name: "موبایل سامسونگ", price: 12000000, stock: 5 },
    { id: uuid(), name: "لپ‌تاپ لنوو", price: 35000000, stock: 2 },
    { id: uuid(), name: "هدفون سونی", price: 2500000, stock: 10 },
    { id: uuid(), name: "موبایل سامسونگ", price: 12000000, stock: 5 },
    { id: uuid(), name: "لپ‌تاپ لنوو", price: 35000000, stock: 2 },
    { id: uuid(), name: "هدفون سونی", price: 2500000, stock: 10 },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
export default productSlice.reducer;
