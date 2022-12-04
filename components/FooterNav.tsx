import { StyleSheet, Text, View } from "react-native";

const FooterNav = () => {
  return (
    <View style={styles.container}>
      <Text>FooterNav</Text>
    </View>
  );
};

export default FooterNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
