import { StyleSheet, Text, View, Image, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { selectProducts } from "../features/commonData/dataSlice";
import { useAppSelector } from "../hooks/typedReduxHooks";
import type { RootStackParamList } from "../types/navigator.types";
import { AddToCart } from "../components";
import * as icons from "../assets/icons";

type Props = NativeStackScreenProps<RootStackParamList, "Product">;

const ProductScreen = ({ route, navigation }: Props) => {
  const { productId } = route.params;
  const products = useAppSelector(selectProducts);
  const product = products.find((product) => product.id === productId);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {product?.title}
        </Text>
      </View>
      <Image style={styles.image} source={{ uri: product?.image }} />
      <View style={styles.detailsContainer}>
        <View style={styles.categoryContainer}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            {product?.category}
          </Text>
          <View style={styles.ratingContainer}>
            {product?.discountRate ? (
              <>
                <Image style={styles.icon} source={icons.coupon} />
                <Text style={{ paddingRight: 15 }}>
                  %{product?.discountRate}
                </Text>
              </>
            ) : null}
            <Image style={styles.icon} source={icons.star} />
            <Text style={{ paddingRight: 15 }}>{product?.rating.rate}</Text>
            <Text>({product?.rating.count})</Text>
          </View>
        </View>
        <Text numberOfLines={5} style={{ marginTop: 10 }}>
          {product?.description}
        </Text>
        <AddToCart
          productId={product?.id}
          price={product?.price}
          discountPrice={product?.discountPrice}
        />
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: "80%",
    height: "50%",
    resizeMode: "contain",
  },
  titleContainer: {
    width: "100%",
    backgroundColor: "#a288a633",
  },
  title: {
    fontSize: 16,
    padding: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  detailsContainer: {
    padding: 15,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    margin: 5,
    width: 20,
    height: 20,
  },
});
