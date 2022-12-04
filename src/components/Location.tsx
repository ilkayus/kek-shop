import { StyleSheet, Text, View, Image } from "react-native";
import * as icons from "../assets/icons";

const Location = () => {
  return (
    <View style={styles.locationContainer}>
      <Image style={styles.icon} source={icons.location} />
      <View>
        <Text style={styles.province}>İzmir,TR</Text>
        <Text style={styles.address}>İşyeri</Text>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dddddd66",
    borderRadius: 4,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderBottomColor: "#555555",
    borderBottomWidth: 2,
    width: "28%",
    margin: 7,
    marginLeft: 0,
  },
  icon: {
    opacity: 0.4,
    margin: 10,
    width: 20,
    height: 20,
  },
  province: {
    fontSize: 8,
    color: "#555555",
    marginTop: 5,
  },
  address: {
    fontSize: 12,
    color: "#333",
    marginBottom: 5,
  },
});
