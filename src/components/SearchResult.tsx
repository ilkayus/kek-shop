import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { IProductData } from "../types";
import { useNavigation } from "@react-navigation/native";

interface Props {
  item: any; // IProductData | { title: string; image: any };
}

const SearchResult = ({ item }: Props) => {
  const navigation = useNavigation();

  const redirectToSelect = () => {
    if (item.id) {
      navigateToProduct();
    } else {
      navigateToCategory();
    }
  };
  const navigateToProduct = () => {
    navigation.navigate("Product" as never, { productId: item.id } as never);
  };
  const navigateToCategory = () => {
    navigation.navigate("Category" as never, { category: item.title } as never);
  };
  return (
    <TouchableOpacity style={styles.result} onPress={redirectToSelect}>
      {item.id ? null : <Image style={styles.icon} source={item.image} />}
      <Text style={{ marginLeft: 10 }}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  result: {
    flexDirection: "row",
    height: 55,
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});
