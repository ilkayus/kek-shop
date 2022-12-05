import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as icons from "../assets/icons";

interface Props {
  id: number;
  title: string;
  price: number;
  image: any;
  discountRate?: number;
  discountPrice?: number;
}

const ProductCard = ({
  id,
  title,
  image,
  price,
  discountRate,
  discountPrice,
}: Props) => {
  const navigation = useNavigation();
  const navigateToProduct = () => {
    navigation.navigate("Product" as never, { productId: id } as never);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToProduct}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text numberOfLines={3} style={styles.title}>
        {title}
      </Text>
      {discountRate ? (
        <>
          <Image style={styles.icon} source={icons.coupon} />
          <View>
            <Text style={styles.oldPrice}>${price.toFixed(2)}</Text>
            <Text style={styles.price}>${discountPrice?.toFixed(2)}</Text>
          </View>
        </>
      ) : (
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#a288a611",
    margin: 5,
    width: 180,
    height: 220,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#a288a633",
    padding: 5,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  title: {
    fontSize: 12,
    textAlign: "left",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  oldPrice: {
    fontSize: 10,
    textAlign: "center",
    textDecorationLine: "line-through",
    color: "gray",
  },
  icon: {
    width: 28,
    height: 28,
    position: "absolute",
    top: 10,
    left: 10,
  },
});
