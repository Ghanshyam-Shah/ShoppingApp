import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { RootStackParamList } from "./types";
import DrawerNavigator from "./DrawerNavigator";
import AuthNavigator from "./AuthNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  // Baad mein Redux se aayega — abhi testing ke liye
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="App" component={DrawerNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
