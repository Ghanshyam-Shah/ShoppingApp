// ─── BASE PALETTE ───────────────────────────────────────────
// Ye raw colors hain — direct use mat karo
// Inhe lightColors / darkColors mein use karo

const palette = {
  // Purple (Brand)
  purple50: "#F3F0FF",
  purple100: "#E9E3FF",
  purple200: "#D4C8FF",
  purple300: "#B3A0FF",
  purple400: "#9B82FF",
  purple500: "#6C63FF", // ← Primary Brand Color
  purple600: "#5A51E0",
  purple700: "#4640B8",

  // Green (Success)
  green50: "#E8F5E9",
  green500: "#4CAF50",
  green700: "#388E3C",

  // Red (Error)
  red50: "#FFEBEE",
  red500: "#F44336",
  red700: "#D32F2F",

  // Orange (Warning)
  orange50: "#FFF3E0",
  orange500: "#FF9800",
  orange700: "#F57C00",

  // Blue (Info)
  blue50: "#E3F2FD",
  blue500: "#2196F3",
  blue700: "#1976D2",

  // Neutrals
  gray50: "#FAFAFA",
  gray100: "#F5F5F5",
  gray200: "#EEEEEE",
  gray300: "#E0E0E0",
  gray400: "#BDBDBD",
  gray500: "#9E9E9E",
  gray600: "#757575",
  gray700: "#616161",
  gray800: "#424242",
  gray900: "#212121",

  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
};

// ─── LIGHT THEME COLORS ─────────────────────────────────────
export const lightColors = {
  // Brand
  primary: palette.purple500,
  primaryLight: palette.purple300,
  primaryDark: palette.purple700,

  // Secondary
  secondary: palette.orange500,
  secondaryLight: palette.orange50,
  secondaryDark: palette.orange700,

  // Status
  success: palette.green500,
  successLight: palette.green50,
  error: palette.red500,
  errorLight: palette.red50,
  warning: palette.orange500,
  warningLight: palette.orange50,
  info: palette.blue500,
  infoLight: palette.blue50,

  // Base
  white: palette.white,
  black: palette.black,

  // Backgrounds
  background: palette.gray50,
  surface: palette.white,
  surfaceSecondary: palette.gray100,

  // Borders
  border: palette.gray300,
  borderLight: palette.gray200,
  divider: palette.gray200,

  // Text
  textPrimary: palette.gray900,
  textSecondary: palette.gray600,
  textDisabled: palette.gray400,
  textInverse: palette.white,
  textHint: palette.gray500,

  // Navigation
  tabActive: palette.purple500,
  tabInactive: palette.gray400,
  navBackground: palette.white,

  // Overlay
  overlay: "rgba(0, 0, 0, 0.5)",
  overlayLight: "rgba(0, 0, 0, 0.2)",

  // Skeleton
  skeleton: palette.gray200,
  skeletonHighlight: palette.gray100,
};

// ─── DARK THEME COLORS ──────────────────────────────────────
export const darkColors = {
  // Brand
  primary: palette.purple400,
  primaryLight: palette.purple300,
  primaryDark: palette.purple600,

  // Secondary
  secondary: palette.orange500,
  secondaryLight: "#2A1F00",
  secondaryDark: palette.orange700,

  // Status
  success: "#66BB6A",
  successLight: "#1B3A1C",
  error: "#EF5350",
  errorLight: "#3B1212",
  warning: "#FFA726",
  warningLight: "#2A1F00",
  info: "#42A5F5",
  infoLight: "#0D2137",

  // Base
  white: palette.white,
  black: palette.black,

  // Backgrounds
  background: "#121212",
  surface: "#1E1E1E",
  surfaceSecondary: "#2C2C2C",

  // Borders
  border: "#3A3A3A",
  borderLight: "#2C2C2C",
  divider: "#2C2C2C",

  // Text
  textPrimary: "#F5F5F5",
  textSecondary: "#AAAAAA",
  textDisabled: "#555555",
  textInverse: palette.gray900,
  textHint: "#777777",

  // Navigation
  tabActive: palette.purple400,
  tabInactive: "#666666",
  navBackground: "#1E1E1E",

  // Overlay
  overlay: "rgba(0, 0, 0, 0.7)",
  overlayLight: "rgba(0, 0, 0, 0.4)",

  // Skeleton
  skeleton: "#2C2C2C",
  skeletonHighlight: "#3A3A3A",
};

export type Colors = typeof lightColors;
