import React, { memo } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useTheme } from "@shared/hooks/useTheme";

interface SecondaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  title,
  onPress,
  disabled = false,
  style,
  textStyle,
  fullWidth = true,
}) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          borderColor: disabled
            ? theme.colors.borderLight
            : theme.colors.primary,
          borderRadius: theme.borderRadius.md,
          paddingVertical: theme.spacing.md,
          width: fullWidth ? "100%" : undefined,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: disabled ? theme.colors.textDisabled : theme.colors.primary,
            fontSize: theme.typography.md,
            fontWeight: theme.fontWeights.semiBold,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    borderWidth: 1.5,
    minHeight: 48,
  },
  text: { textAlign: "center" },
});

export default memo(SecondaryButton);
