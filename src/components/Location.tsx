import { StyleSheet, Text, View, Image } from "react-native";
import * as icons from "../assets/icons";
import { useAppSelector } from "../hooks";
import { selectUser, selectIsUserPending } from "../features/user/userSlice";

const Location = () => {
  const user = useAppSelector(selectUser);
  const isUserPending = useAppSelector(selectIsUserPending);
  if (isUserPending) return null;
  return (
    <View style={styles.locationContainer}>
      <View style={styles.topContainer}>
        <Image style={styles.icon} source={icons.location} />
        <Text style={styles.province}>{user.address.city}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text numberOfLines={2} style={styles.address}>
          {user.address.street}
        </Text>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  locationContainer: {
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
  topContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "baseline",
    flex: 1,
  },
  bottomContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "baseline",
    marginLeft: 5,
  },
  icon: {
    opacity: 0.4,
    margin: 5,
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
