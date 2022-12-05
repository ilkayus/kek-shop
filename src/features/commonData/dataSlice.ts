import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IProductData } from "../../types";
import API from "../../api";
import * as categoryImages from "../../assets/images";

type TCategories = {
  title: IProductData["category"];
  image: string;
};

export interface IDataState {
  categories: TCategories[];
  products: IProductData[];
}

const initialState: IDataState = {
  categories: [
    {
      title: "Electronics",
      image: categoryImages.electronics,
    },
    {
      title: "Jewelry",
      image: categoryImages.jewelry,
    },
    {
      title: "Women's Clothing",
      image: categoryImages.womensClothing,
    },
    {
      title: "Men's Clothing",
      image: categoryImages.mensClotging,
    },
  ],
  products: [],
};

export const fetchCategories = createAsyncThunk(
  "data/fetchCategories",
  async () => {
    const response = await API.getCategories();
    return response;
  }
);

export const fetchProducts = createAsyncThunk(
  "data/fetchProducts",
  async () => {
    const response = await API.getAllProducts();
    return response;
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    applyDiscounts: (state, action: { payload: number }) => {
      const data = [...state.products]
        .sort(() => 0.5 - Math.random())
        .slice(0, action.payload)
        .map((product) => {
          const extensibleProduct = { ...product };
          const rate = Math.floor(Math.random() * 20) + 21;
          extensibleProduct.discountRate = rate;
          extensibleProduct.discountPrice =
            product.price - (product.price * rate) / 100;
          return extensibleProduct;
        });
      data.forEach((product: IProductData) => {
        state.products[product.id - 1] = product;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      // state.categories = action.payload;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { applyDiscounts } = dataSlice.actions;
export const selectCategories = (state: RootState) => state.data.categories;
export const selectProducts = (state: RootState) => state.data.products;
export default dataSlice.reducer;
