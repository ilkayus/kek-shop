import { useEffect } from "react";
import { useAppDispatch } from "./typedReduxHooks";
import {
  fetchCategories,
  fetchProducts,
} from "../features/commonData/dataSlice";
import { fetchUser, fetchUserCart } from "../features/user/userSlice";

export const useApploader = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const randomUser = Math.floor(Math.random() * 10) + 1;
    dispatch(fetchUser(randomUser.toString()));
    dispatch(fetchUserCart(randomUser.toString()));
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);
};
