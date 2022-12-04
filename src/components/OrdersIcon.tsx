import { StyleSheet, View, Text, Image } from "react-native";
import * as icons from "../assets/icons";

const OrdersIcon = () => {
  return (
    <View>
      <Image style={styles.icon} source={icons.completedOrders} />
    </View>
  );
};

export default OrdersIcon;

const styles = StyleSheet.create({
  icon: {
    margin: 10,
    width: 20,
    height: 20,
  },
});
