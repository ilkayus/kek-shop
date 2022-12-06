import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { IProductData } from "../types";
import { useAppDispatch } from "../hooks/typedReduxHooks";
import { addOne, removeOne, removeProduct } from "../features/user/userSlice";
import { useNavigation } from "@react-navigation/native";

interface Props {
  product?: IProductData;
  count?: number;
  sumPrice?: number;
}

const ProductListCard = ({ product, count, sumPrice }: Props) => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const navigateToProduct = () => {
    navigation.navigate(
      "Product" as never,
      { productId: product?.id } as never
    );
  };

  const addOneHandler = () => {
    if (!product) return;
    dispatch(addOne(product?.id));
  };
  const removeOneHandler = () => {
    if (!product) return;
    dispatch(removeOne(product?.id));
  };
  const removeProductHandler = () => {
    if (!product) return;
    dispatch(removeProduct(product?.id));
  };

  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={styles.container}
      onPress={() => setModalVisible(true)}
      onLongPress={navigateToProduct}
    >
      {modalVisible ? (
        <View style={styles.edit}>
          <Text onPress={addOneHandler} style={styles.icon}>
            ➕
          </Text>
          <Text onPress={removeOneHandler} style={styles.icon}>
            ➖
          </Text>
          <Text onPress={removeProductHandler} style={styles.icon}>
            🗑️
          </Text>
          <Text onPress={() => setModalVisible(false)} style={styles.icon}>
            ❌
          </Text>
        </View>
      ) : (
        <>
          <Image style={styles.image} source={{ uri: product?.image }} />
          <View style={styles.textContainer}>
            <Text numberOfLines={3} style={styles.title}>
              {product?.title.slice(0, 24)}...
            </Text>
            <Text>
              Qty:{count} unit:$
              {(product?.discountPrice || product?.price)?.toFixed(2)}
            </Text>
          </View>
          <Text style={styles.price}>${sumPrice?.toFixed(2)}</Text>
        </>
      )}
    </Pressable>
  );
};

export default ProductListCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a288a611",
    marginHorizontal: 15,
    marginVertical: 5,
    width: "93%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#a288a633",
    padding: 10,
  },
  image: {
    flex: 2,
    width: 100,
    height: 90,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  title: {
    fontSize: 12,
  },
  price: {
    flex: 3,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
  edit: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    fontSize: 30,
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
  },
});
