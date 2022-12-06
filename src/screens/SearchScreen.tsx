import { StyleSheet, FlatList, View, TextInput, Image } from "react-native";
import { useState, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import { useAppSelector } from "../hooks";
import {
  selectProducts,
  selectCategories,
} from "../features/commonData/dataSlice";
import { SearchResult } from "../components";
import * as icons from "../assets/icons";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategories);
  const filteredCategories =
    search === ""
      ? []
      : categories.filter((category) =>
          category.title.toLowerCase().includes(search.toLowerCase())
        );
  const filteredProducts =
    search === ""
      ? []
      : products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
  const handleInputChange = (input: string) => {
    setSearch(input);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleInputChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <View>
      <View style={styles.searchContainer}>
        <Image style={styles.icon} source={icons.search} />
        <TextInput
          style={styles.input}
          onChangeText={debouncedResults}
          placeholder="Search for products and categories"
        />
      </View>
      <View>
        <FlatList
          data={[...filteredCategories, ...filteredProducts]}
          renderItem={({ item }) => <SearchResult item={item} />}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
  },
  icon: {
    position: "absolute",
    right: 0,
    opacity: 0.2,
    margin: 10,
    marginRight: 20,
    width: 20,
    height: 20,
  },
  input: {
    fontSize: 16,
    marginLeft: 20,
    height: 60,
  },
});
