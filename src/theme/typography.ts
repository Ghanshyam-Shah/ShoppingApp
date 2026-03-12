import { Platform } from "react-native";

// ─── FONT SIZE SCALE ────────────────────────────────────────
export const typography = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 22,
  xxxl: 26,
  display: 32,
};

// ─── FONT WEIGHTS ───────────────────────────────────────────
export const fontWeights = {
  regular: "400" as const,
  medium: "500" as const,
  semiBold: "600" as const,
  bold: "700" as const,
  extraBold: "800" as const,
};

// ─── FONT FAMILIES ──────────────────────────────────────────
// iOS aur Android ke system fonts alag hote hain
export const fontFamilies = {
  regular: Platform.OS === "ios" ? "System" : "Roboto",
  medium: Platform.OS === "ios" ? "System" : "Roboto",
  semiBold: Platform.OS === "ios" ? "System" : "Roboto",
  bold: Platform.OS === "ios" ? "System" : "Roboto",
};

// ─── LINE HEIGHTS ───────────────────────────────────────────
export const lineHeights = {
  xs: 16,
  sm: 18,
  md: 22,
  lg: 24,
  xl: 28,
  xxl: 32,
  xxxl: 36,
  display: 44,
};

// ─── TEXT STYLES (Reusable) ─────────────────────────────────
export const textStyles = {
  displayLarge: {
    fontSize: typography.display,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
  },
  displayMedium: {
    fontSize: typography.xxxl,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xxxl,
  },
  headingLarge: {
    fontSize: typography.xxl,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xxl,
  },
  headingMedium: {
    fontSize: typography.xl,
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights.xl,
  },
  headingSmall: {
    fontSize: typography.lg,
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights.lg,
  },
  bodyLarge: {
    fontSize: typography.lg,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.lg,
  },
  bodyMedium: {
    fontSize: typography.md,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.md,
  },
  bodySmall: {
    fontSize: typography.sm,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.sm,
  },
  labelLarge: {
    fontSize: typography.md,
    fontWeight: fontWeights.semiBold,
    lineHeight: lineHeights.md,
  },
  labelSmall: {
    fontSize: typography.sm,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.sm,
  },
  caption: {
    fontSize: typography.xs,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.xs,
  },
};
