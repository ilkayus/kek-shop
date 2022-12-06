import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as icons from "../assets/icons";

interface Props {
  title: string;
}

const HeaderText = ({ title }: Props) => {
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate("Home" as never);
  };
  return (
    <TouchableOpacity style={styles.textContainer} onPress={navigateToHome}>
      {title === "Home" ? null : (
        <Image style={styles.icon} source={icons.arrow} />
      )}
      <Text style={styles.headerText}>
        {/* @ts-ignore */}
        {ScreenTitles[title]}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#442120",
  },
  icon: {
    opacity: 0.2,
    margin: 10,
    width: 20,
    height: 20,
  },
});

enum ScreenTitles {
  Home = "kek-shop",
  Cart = "Your Cart ",
  Category = "Category",
  Product = "Product",
  Search = "Search",
}
