import { View, Text, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View>
      <Text>🛍️ ShoppingApp</Text>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6C63FF",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  sub: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  },
});

export default SplashScreen;
