import { StyleSheet, Text, View } from "react-native";
import ProductShortList from "./ProductShortList";
import {
  selectProducts,
  applyDiscounts,
} from "../features/commonData/dataSlice";
import { useAppSelector, useAppDispatch } from "../hooks/typedReduxHooks";

const Discounts = () => {
  const array = [...useAppSelector(selectProducts)];
  const data = array.filter(
    (item) => item.discountRate && item.discountRate > 0
  );
  return (
    <View style={styles.container}>
      <ProductShortList data={data} title="Currently on Discount" />
    </View>
  );
};

// create an array with lenght of 10 and fill with random numbers between 21 and 40

export default Discounts;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 5,
    alignSelf: "flex-start",
  },
});
