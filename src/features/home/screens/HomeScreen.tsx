import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shared/hooks/useTheme";
import { PrimaryButton, SecondaryButton } from "@shared/components/buttons";
import { AppTextInput } from "@shared/components/inputs";
import {
  LoadingSpinner,
  EmptyState,
  ErrorState,
} from "@shared/components/feedback";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { theme, isDark, toggleTheme } = useTheme();
  const [inputValue, setInputValue] = useState("");

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: theme.colors.surface,
            ...theme.shadows.sm,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu" size={28} color={theme.colors.textPrimary} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: theme.typography.xl,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
          }}
        >
          ShoppingApp
        </Text>
        <TouchableOpacity onPress={toggleTheme}>
          <Ionicons
            name={isDark ? "sunny-outline" : "moon-outline"}
            size={26}
            color={theme.colors.textPrimary}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: theme.spacing.lg }}>
        {/* Theme Test */}
        <Text
          style={{
            fontSize: theme.typography.xxl,
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            marginBottom: theme.spacing.lg,
          }}
        >
          Design System Test
        </Text>

        {/* Buttons */}
        <Text
          style={{
            color: theme.colors.textSecondary,
            marginBottom: theme.spacing.sm,
          }}
        >
          Buttons:
        </Text>
        <PrimaryButton title="Primary Button" onPress={() => {}} />
        <View style={{ height: theme.spacing.sm }} />
        <SecondaryButton title="Secondary Button" onPress={() => {}} />

        {/* Input */}
        <View style={{ marginTop: theme.spacing.lg }}>
          <AppTextInput
            label="Test Input"
            placeholder="Type something..."
            value={inputValue}
            onChangeText={setInputValue}
          />
        </View>

        {/* Colors */}
        <Text
          style={{
            color: theme.colors.textSecondary,
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
          }}
        >
          Colors:
        </Text>
        <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
          {["primary", "success", "error", "warning", "info"].map((key) => (
            <View
              key={key}
              style={{
                width: 50,
                height: 50,
                borderRadius: theme.borderRadius.sm,
                backgroundColor: theme.colors[
                  key as keyof typeof theme.colors
                ] as string,
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
  },
});

export default HomeScreen;
