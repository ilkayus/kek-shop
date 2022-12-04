import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useState } from "react";
import { addProductToCart } from "../features/user/userSlice";
import { useAppDispatch } from "../hooks/typedReduxHooks";

interface Props {
  productId?: number;
  price?: number;
}

const AddToCart = ({ productId, price }: Props) => {
  if (!price) return null;
  const [count, setCount] = useState(1);
  const dispatch = useAppDispatch();

  const addToShoppingCart = () => {
    dispatch(addProductToCart({ productId, quantity: count }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.pricing}>
        <Text style={styles.price}>${(price * count).toFixed(2)}</Text>
        <View style={styles.count}>
          <Text
            onPress={() => setCount((prev) => (prev < 10 ? prev + 1 : prev))}
            style={styles.operandsplus}
          >
            +
          </Text>
          <Text style={styles.number}>{count}</Text>
          <Text
            onPress={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))}
            style={styles.operandsminus}
          >
            —
          </Text>
        </View>
      </View>
      <Button onPress={addToShoppingCart} color="#664340" title="Add To Cart" />
    </View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  container: {},
  price: {
    fontSize: 16,
    padding: 15,
    paddingLeft: 0,
    fontWeight: "bold",
  },
  count: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 140,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 5,
  },
  operandsplus: {
    borderRightWidth: 1,
    paddingHorizontal: 13,
    fontSize: 25,
    fontWeight: "bold",
  },
  operandsminus: {
    borderLeftWidth: 1,
    paddingHorizontal: 13,
    paddingRight: 6,
    fontSize: 25,
    fontWeight: "bold",
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  pricing: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
