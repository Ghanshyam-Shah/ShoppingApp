export interface ColorPalette {
  // Brand Colors
  primary: string;
  primaryLight: string;
  primaryDark: string;

  // Secondary
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;

  // Status Colors
  success: string;
  successLight: string;
  error: string;
  errorLight: string;
  warning: string;
  warningLight: string;
  info: string;
  infoLight: string;

  // Neutral
  white: string;
  black: string;
  background: string;
  surface: string;
  surfaceSecondary: string;
  border: string;
  borderLight: string;
  divider: string;

  // Text
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  textInverse: string;
  textHint: string;

  // Tab & Navigation
  tabActive: string;
  tabInactive: string;
  navBackground: string;

  // Overlay
  overlay: string;
  overlayLight: string;

  // Skeleton Loading
  skeleton: string;
  skeletonHighlight: string;
}

export interface TypographyScale {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  display: number;
}

export interface FontWeights {
  regular: "400";
  medium: "500";
  semiBold: "600";
  bold: "700";
  extraBold: "800";
}

export interface FontFamilies {
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
}

export interface SpacingScale {
  xs: number; // 4
  sm: number; // 8
  md: number; // 12
  lg: number; // 16
  xl: number; // 20
  xxl: number; // 24
  xxxl: number; // 32
  huge: number; // 48
  giant: number; // 64
}

export interface BorderRadiusScale {
  xs: number; // 4
  sm: number; // 8
  md: number; // 12
  lg: number; // 16
  xl: number; // 20
  xxl: number; // 24
  full: number; // 999
}

export interface ShadowStyle {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export interface ShadowScale {
  none: ShadowStyle;
  sm: ShadowStyle;
  md: ShadowStyle;
  lg: ShadowStyle;
  xl: ShadowStyle;
}

export interface AppTheme {
  dark: boolean;
  colors: ColorPalette;
  typography: TypographyScale;
  fontWeights: FontWeights;
  fontFamilies: FontFamilies;
  spacing: SpacingScale;
  borderRadius: BorderRadiusScale;
  shadows: ShadowScale;
}
