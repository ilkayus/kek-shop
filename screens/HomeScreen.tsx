import { StyleSheet, ScrollView, View } from "react-native";
import {
  Header,
  Search,
  Location,
  Categories,
  Popular,
  Suggested,
  FooterNav,
} from "../components";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.searchRowContainer}>
        <Search />
        <Location />
      </View>
      <View style={{ flex: 9 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <Popular />
          <Suggested />
        </ScrollView>
      </View>
      {/* <FooterNav /> */}
      {/* 
      <Featured />
      <Discounts /> 
    */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchRowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "96%",
  },
});
