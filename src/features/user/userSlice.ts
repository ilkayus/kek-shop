import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IShoppingCart, IUserData } from "../../types";
import API from "../../api";

export interface IUserState {
  user: IUserData;
  isUserPending: boolean;
  cart: IShoppingCart[];
  isCartPending: boolean;
}

const initialState: IUserState = {
  user: <IUserData>{},
  isUserPending: true,
  cart: <IShoppingCart[]>[],
  isCartPending: true,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (id: string) => {
    const response = await API.getUser(id);
    return response;
  }
);

export const fetchUserCart = createAsyncThunk(
  "user/fetchUserCart",
  async (id: string) => {
    const response = await API.getUserCart(id);
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addOne: (state, action: PayloadAction<number>) => {
      const product = state.cart[0].products.find(
        (product) => product.productId === action.payload
      );
      product ? (product.quantity += 1) : null;
    },

    removeOne: (state, action: PayloadAction<number>) => {
      const product = state.cart[0].products.find(
        (product) => product.productId === action.payload
      );
      product ? (product.quantity -= 1) : null;
      state.cart[0].products = state.cart[0].products.filter((product) => {
        return product.quantity > 0;
      });
      state.cart = state.cart.filter((cart) => {
        return cart.products.length > 0;
      });
      if (!state.cart) {
        state.cart = <IShoppingCart[]>{};
      }
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      state.cart[0].products = state.cart[0].products.filter(
        (product) => product.productId !== action.payload
      );
      state.cart = state.cart.filter((cart) => {
        return cart.products.length > 0;
      });
      if (!state.cart) {
        state.cart = <IShoppingCart[]>{};
      }
    },

    addProductToCart: {
      reducer(state, action: PayloadAction<IShoppingCart["products"]>) {
        if (state.cart.length < 1) {
          state.cart.push({
            id: 21,
            userId: state.user.id,
            products: action.payload,
          });
        } else {
          const isExists = state.cart[0].products.some(
            (product) => product.productId === action.payload[0].productId
          );
          if (!isExists) state.cart[0].products.push(action.payload[0]);
          else {
            const product = state.cart[0].products.find(
              (product) => product.productId === action.payload[0].productId
            );
            product ? (product.quantity += action.payload[0].quantity) : null;
          }
        }
      },
      prepare({ productId, quantity }) {
        return {
          payload: [
            {
              productId,
              quantity,
            },
          ],
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isUserPending = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isUserPending = false;
    });
    builder.addCase(fetchUserCart.pending, (state) => {
      state.isCartPending = true;
    });
    builder.addCase(fetchUserCart.fulfilled, (state, action) => {
      state.cart[0] = action.payload;
      state.isCartPending = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart, addOne, removeOne, removeProduct } =
  userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export const selectIsUserPending = (state: RootState) =>
  state.user.isUserPending;
export const selectUserCart = (state: RootState) => state.user.cart;
export const selectIsCartPending = (state: RootState) =>
  state.user.isCartPending;
export default userSlice.reducer;
