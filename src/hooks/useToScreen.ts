import { useNavigation } from "@react-navigation/native";

const useToScreen = (ScreenName: string, options: any) => {
  const navigation = useNavigation();
  navigation.navigate(ScreenName as never, options as never);
};

export default useToScreen;
