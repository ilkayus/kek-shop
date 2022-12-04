import { StyleSheet, View } from "react-native";
import ProductShortList from "./ProductShortList";
import { selectProducts } from "../features/commonData/dataSlice";
import { useAppSelector } from "../hooks/typedReduxHooks";

const Popular = () => {
  const array = [...useAppSelector(selectProducts)];
  const data = array.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <View style={styles.container}>
      <ProductShortList data={data} title="Popular Products" />
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 5,
    alignSelf: "flex-start",
  },
});
