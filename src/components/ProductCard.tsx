import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Props {
  id: number;
  title: string;
  price: number;
  image: any;
}

const ProductCard = ({ id, title, image, price }: Props) => {
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
      <Text style={styles.price}>${price.toFixed(2)}</Text>
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
});
