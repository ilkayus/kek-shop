import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import * as icons from "../assets/icons";

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <Image style={styles.icon} source={icons.search} />
      <TextInput style={styles.input} placeholder="Search for anything" />
    </View>
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
  input: {},
});
