import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./src/store";
import { Provider } from "react-redux";
import type { RootStackParamList } from "./src/types/navigator.types";
import * as Screens from "./src/screens";
import { Header, Apploader } from "./src/components";

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
            <RootStack.Screen name="Home" component={Screens.HomeScreen} />
            <RootStack.Screen
              name="Product"
              component={Screens.ProductScreen}
            />
            <RootStack.Screen name="Cart" component={Screens.CartScreen} />
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
