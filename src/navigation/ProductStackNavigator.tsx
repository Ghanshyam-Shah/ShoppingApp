import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductStackParamList } from "./types";

import ProductListScreen from "@features/products/screens/ProductListScreen";
import ProductDetailScreen from "@features/products/screens/ProductDetailScreen";
import ProductManagementScreen from "@features/products/screens/ProductManagementScreen";

const Stack = createNativeStackNavigator<ProductStackParamList>();

const ProductStackNavigator = () => {
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProductList" component={ProductListScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    <Stack.Screen
      name="ProductManagement"
      component={ProductManagementScreen}
    />
  </Stack.Navigator>;
};

export default ProductStackNavigator;
