import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartStackParamList } from "./types";
import CartScreen from "@features/cart/screens/CartScreen";

const Stack = createNativeStackNavigator<CartStackParamList>();

const CartStackNavigator = () => {
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CartMain" component={CartScreen} />
  </Stack.Navigator>;
};

export default CartStackNavigator;
