import { StyleSheet, Text, View } from "react-native";
import ProductShortList from "./ProductShortList";
import {
  selectProducts,
  updateDiscounts,
} from "../features/commonData/dataSlice";
import { useAppSelector, useAppDispatch } from "../hooks/typedReduxHooks";

const Discounts = () => {
  const dispatch = useAppDispatch();
  const discountRates = Array(8).map(
    (e) => Math.floor(Math.random() * 20) + 21
  );
  console.log(discountRates);
  const array = [...useAppSelector(selectProducts)];
  const data = array.sort(() => 0.5 - Math.random()).slice(0, 8);
  dispatch(updateDiscounts(data, discountRates));

  return (
    <View style={styles.container}>
      <ProductShortList data={data} title="Currently on Discount" />
    </View>
  );
};

export default Discounts;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 5,
    alignSelf: "flex-start",
  },
});
