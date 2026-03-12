import React, { memo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  Platform,
} from "react-native";
import { useTheme } from "@shared/hooks/useTheme";

interface AppTextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureText?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  style?: ViewStyle;
  editable?: boolean;
  multiline?: boolean;
  maxLength?: number;
  rightIcon?: React.ReactNode;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  secureText = false,
  keyboardType = "default",
  autoCapitalize = "sentences",
  style,
  editable = true,
  multiline = false,
  maxLength,
  rightIcon,
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = error
    ? theme.colors.error
    : isFocused
      ? theme.colors.primary
      : theme.colors.border;

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text
          style={[
            styles.label,
            {
              color: theme.colors.textSecondary,
              fontSize: theme.typography.sm,
              fontWeight: theme.fontWeights.medium,
              marginBottom: theme.spacing.xs,
            },
          ]}
        >
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputWrapper,
          {
            borderColor,
            borderRadius: theme.borderRadius.sm,
            backgroundColor: editable
              ? theme.colors.surface
              : theme.colors.surfaceSecondary,
          },
        ]}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textHint}
          secureTextEntry={secureText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          editable={editable}
          multiline={multiline}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.input,
            {
              color: theme.colors.textPrimary,
              fontSize: theme.typography.md,
              // iOS aur Android text alignment fix
              paddingTop: multiline
                ? theme.spacing.sm
                : Platform.OS === "ios"
                  ? 0
                  : undefined,
            },
          ]}
        />
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>

      {error && (
        <Text
          style={[
            styles.error,
            {
              color: theme.colors.error,
              fontSize: theme.typography.xs,
              marginTop: theme.spacing.xs,
            },
          ]}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%" },
  label: {},
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    paddingHorizontal: 12,
    minHeight: 48,
  },
  input: {
    flex: 1,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
  },
  rightIcon: { marginLeft: 8 },
  error: {},
});

export default memo(AppTextInput);
