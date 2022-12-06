import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
interface Props {
  title: string;
  image: any;
}

const CategoryCard = ({ title, image }: Props) => {
  const navigation = useNavigation();
  const navigateToCategory = () => {
    navigation.navigate("Category" as never, { category: title } as never);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToCategory}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#a288a611",
    margin: 5,
    width: 120,
    height: 140,
    borderRadius: 5,
    padding: 5,
  },
  image: {
    width: 90,
    height: 90,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
