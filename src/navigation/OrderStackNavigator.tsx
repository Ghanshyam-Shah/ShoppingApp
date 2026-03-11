import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrderStackParamList } from "./types";
import OrderHistoryScreen from "@features/orders/screens/OrderHistoryScreen";
import OrderDetailScreen from "@features/orders/screens/OrderDetailScreen";

const Stack = createNativeStackNavigator<OrderStackParamList>();

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
    </Stack.Navigator>
  );
};

export default OrderStackNavigator;
