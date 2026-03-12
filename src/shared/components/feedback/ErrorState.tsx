import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shared/hooks/useTheme";
import PrimaryButton from "../buttons/PrimaryButton";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  message = "Something went wrong. Please try again.",
  onRetry,
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Ionicons
        name="alert-circle-outline"
        size={72}
        color={theme.colors.error}
      />
      <Text
        style={{
          fontSize: theme.typography.lg,
          fontWeight: theme.fontWeights.semiBold,
          color: theme.colors.textPrimary,
          marginTop: theme.spacing.lg,
          textAlign: "center",
        }}
      >
        Oops!
      </Text>
      <Text
        style={{
          fontSize: theme.typography.md,
          color: theme.colors.textSecondary,
          marginTop: theme.spacing.sm,
          textAlign: "center",
        }}
      >
        {message}
      </Text>
      {onRetry && (
        <View style={{ marginTop: theme.spacing.xl, width: "60%" }}>
          <PrimaryButton title="Try Again" onPress={onRetry} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
});

export default memo(ErrorState);
