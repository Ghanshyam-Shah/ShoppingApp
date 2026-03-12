import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@shared/hooks/useTheme";
import PrimaryButton from "../buttons/PrimaryButton";

interface EmptyStateProps {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon = "cube-outline",
  title,
  description,
  actionLabel,
  onAction,
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={72} color={theme.colors.textDisabled} />
      <Text
        style={{
          fontSize: theme.typography.xl,
          fontWeight: theme.fontWeights.semiBold,
          color: theme.colors.textPrimary,
          marginTop: theme.spacing.lg,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
      {description && (
        <Text
          style={{
            fontSize: theme.typography.md,
            color: theme.colors.textSecondary,
            marginTop: theme.spacing.sm,
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          {description}
        </Text>
      )}
      {actionLabel && onAction && (
        <View style={{ marginTop: theme.spacing.xl, width: "60%" }}>
          <PrimaryButton title={actionLabel} onPress={onAction} />
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

export default memo(EmptyState);
