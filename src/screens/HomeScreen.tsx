import { StyleSheet, ScrollView, View } from "react-native";
import * as Components from "../components";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.searchRowContainer}>
        <Components.Search />
        <Components.Location />
      </View>
      <View style={{ flex: 9 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Components.Categories />
          <Components.Popular />
          <Components.Discounts />
          <Components.Suggested />
        </ScrollView>
      </View>
      {/* <FooterNav /> */}
      {/* 
      <Featured />
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
