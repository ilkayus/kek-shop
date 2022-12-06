import { StyleSheet, View, Text } from "react-native";
import UserIcon from "./UserIcon";
import ShoppingCartIcon from "./ShoppingCartIcon";
import OrdersIcon from "./OrdersIcon";
import HeaderText from "./HeaderText";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const Header = () => {
  const [currentScreen, setCurrentScreen] = useState("Home");
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener("state", () => {
      setCurrentScreen(navigation.getCurrentRoute().name);
    });

    return () => {
      navigation.removeListener(
        "state",
        setCurrentScreen(navigation.getCurrentRoute().name)
      );
    };
  }, []);

  return (
    <View style={styles.headerContainer}>
      <HeaderText title={currentScreen} />
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
