import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryCard from "./CategoryCard";
import { selectCategories } from "../features/commonData/dataSlice";
import { useAppSelector } from "../hooks/typedReduxHooks";

const Categories = () => {
  const data = useAppSelector(selectCategories);
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.text}>Categories</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={(item) => {
          return (
            <CategoryCard title={item.item.title} image={item.item.image} />
          );
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesContainer: {
    marginTop: 10,
    flex: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});
