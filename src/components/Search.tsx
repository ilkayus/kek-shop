import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as icons from "../assets/icons";

const Search = () => {
  const navigation = useNavigation();
  const navigateToSearch = () => {
    navigation.navigate("Search" as never);
  };
  return (
    <TouchableOpacity style={styles.searchContainer} onPress={navigateToSearch}>
      <Image style={styles.icon} source={icons.search} />
      <Text style={styles.input}>Search for anything</Text>
    </TouchableOpacity>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 4,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderBottomColor: "#555555",
    borderBottomWidth: 2,
    width: "70%",
    margin: 7,
  },
  icon: {
    opacity: 0.2,
    margin: 10,
    width: 20,
    height: 20,
  },
  input: { opacity: 0.4 },
});
