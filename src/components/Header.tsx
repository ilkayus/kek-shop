import { StyleSheet, View, Text } from "react-native";
import UserIcon from "./UserIcon";
import ShoppingCartIcon from "./ShoppingCartIcon";
import OrdersIcon from "./OrdersIcon";
import HeaderText from "./HeaderText";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <HeaderText />
      <View style={styles.iconsContainer}>
        <OrdersIcon />
        <ShoppingCartIcon />
        <UserIcon />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 45,
    paddingLeft: 15,
    marginTop: 0,
    width: "100%",
    height: 90,
    backgroundColor: "#a288a611",
    justifyContent: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
