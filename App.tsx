import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProductScreen, CartScreen } from "./screens";
import { store } from "./store";
import { Provider } from "react-redux";
import Apploader from "./components/Apploader";
import type { RootStackParamList } from "./types/navigator.types";
import { Header, FooterNav } from "./components";
import { View } from "react-native";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Apploader />
        <Header />
        <View style={{ flex: 10 }}>
          <RootStack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Product" component={ProductScreen} />
            <RootStack.Screen name="Cart" component={CartScreen} />
            {/* <RootStack.Screen name="Cart" component={CartScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
        <RootStack.Screen name="Categories" component={CategoriesScreen} />
      <RootStack.Screen name="Checkout" component={CheckoutScreen} /> */}
          </RootStack.Navigator>
        </View>
        {/* <FooterNav /> */}
      </NavigationContainer>
    </Provider>
  );
}
