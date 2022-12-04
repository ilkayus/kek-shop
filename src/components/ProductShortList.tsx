import { StyleSheet, Text, View, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { IProductData } from "../types";

interface Props {
  title: string;
  data: IProductData[];
}

const ProductShortList = ({ title, data }: Props) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={(item) => {
          return (
            <ProductCard
              id={item.item.id}
              title={item.item.title}
              image={item.item.image}
              price={item.item.price}
            />
          );
        }}
      />
    </View>
  );
};

export default ProductShortList;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});
