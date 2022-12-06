import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "types/navigator.types";
import { useAppSelector } from "../hooks";
import {
  selectProducts,
  selectCategories,
} from "../features/commonData/dataSlice";
import { categoryName } from "../helpers";
import { FlatList } from "react-native";
import { ProductCard } from "../components";

type Props = NativeStackScreenProps<RootStackParamList, "Category">;

const CategoryScreen = ({ route, navigation }: Props) => {
  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategories);
  const { category } = route.params;
  const image = categories.find((item) => item.title === category)
    ?.image as any;
  const filteredProducts = products.filter(
    (product) => product.category === categoryName(category)
  );
  const ListHeader = () => (
    <View style={styles.header}>
      <View style={styles.colorArea}></View>
      <View style={styles.text}>
        <Text style={{ fontSize: 25, fontWeight: "bold", fontStyle: "italic" }}>
          {category}
        </Text>
      </View>
      <Image source={image} style={styles.image} />
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={<ListHeader />}
        data={filteredProducts}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={(item) => (
          <ProductCard
            id={item.item.id}
            title={item.item.title}
            image={item.item.image}
            price={item.item.price}
            discountRate={item.item.discountRate}
            discountPrice={item.item.discountPrice}
          />
        )}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  header: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  colorArea: {
    backgroundColor: "#a288a688",
    width: "100%",
    height: 240,
  },
  text: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
    alignItems: "center",
    fontWeight: "bold",
    backgroundColor: "#f002",
    width: "100%",
  },
  image: {
    position: "absolute",
    height: 320,
    resizeMode: "contain",
  },
});
