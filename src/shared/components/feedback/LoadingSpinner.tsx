import React, { memo } from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { useTheme } from "@shared/hooks/useTheme";

interface LoadingSpinnerProps {
  size?: "small" | "large";
  message?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "large",
  message,
  fullScreen = false,
}) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        fullScreen && styles.fullScreen,
        {
          backgroundColor: fullScreen ? theme.colors.background : "transparent",
        },
      ]}
    >
      <ActivityIndicator size={size} color={theme.colors.primary} />
      {message && (
        <Text
          style={{
            marginTop: theme.spacing.sm,
            color: theme.colors.textSecondary,
            fontSize: theme.typography.sm,
          }}
        >
          {message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", padding: 16 },
  fullScreen: { flex: 1 },
});

export default memo(LoadingSpinner);
