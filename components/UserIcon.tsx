import { StyleSheet, View, Text } from "react-native";
import { useAppSelector } from "../hooks/typedReduxHooks";
import { selectUser, selectIsUserPending } from "../features/user/userSlice";
import { useEffect, useState } from "react";

const UserIcon = () => {
  const user = useAppSelector(selectUser);
  const isUserPending = useAppSelector(selectIsUserPending);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (isUserPending) return;
    const name = user.name.firstname.charAt(0) + user.name.lastname.charAt(0);
    setUsername(name.toUpperCase());
  }, [isUserPending]);

  return (
    <View>
      {/* userimage?image src=userimage:initials */}
      <Text style={styles.icon}>{username}</Text>
    </View>
  );
};

export default UserIcon;

const styles = StyleSheet.create({
  icon: {
    paddingTop: 4,
    borderRadius: 50,
    marginHorizontal: 10,
    color: "#fff",
    backgroundColor: "#442120",
    width: 30,
    height: 30,
    textAlign: "center",
  },
});
