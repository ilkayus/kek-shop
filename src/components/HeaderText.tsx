import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
}

const HeaderText = ({ title }: Props) => {
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate("Home" as never);
  };
  return (
    <View style={styles.textContainer}>
      <Text onPress={navigateToHome} style={styles.headerText}>
        {/* @ts-ignore */}
        {ScreenTitles[title]}
      </Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#442120",
  },
});

enum ScreenTitles {
  Home = "kek-shop",
  Cart = "◀️ Your Cart",
  Category = "◀️ Category",
  Product = "◀️ Product",
}
