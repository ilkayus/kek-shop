import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as icons from "../assets/icons";
import {
  selectUserCart,
  selectIsCartPending,
} from "../features/user/userSlice";
import { useAppSelector } from "../hooks/typedReduxHooks";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ShoppingCartIcon = () => {
  const cart = useAppSelector(selectUserCart);
  const isCartPending = useAppSelector(selectIsCartPending);
  const [cartCount, setCartCount] = useState(0);

  const navigation = useNavigation();
  const navigateToCart = () => {
    navigation.navigate("Cart" as never);
  };

  useEffect(() => {
    if (isCartPending || cart.length < 1) setCartCount(0);
    else setCartCount(cart[0].products.length);
  }, [isCartPending, cart]);

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToCart}>
      {cartCount ? <Text style={styles.count}>{cartCount}</Text> : null}
      <Image style={styles.icon} source={icons.shoppingCart} />
    </TouchableOpacity>
  );
};

export default ShoppingCartIcon;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  count: {
    position: "absolute",
    top: 5,
    right: 5,
    borderRadius: 50,
    color: "#fff",
    backgroundColor: "orangered",
    width: 15,
    height: 15,
    fontSize: 10,
    textAlign: "center",
    zIndex: 1,
  },
  icon: {
    margin: 10,
    width: 24,
    height: 24,
  },
});
