import { AppTheme } from "./types/theme.types";
import { darkColors } from "./colors";
import { typography, fontWeights, fontFamilies } from "./typography";
import { spacing } from "./spacing";
import { borderRadius } from "./borderRadius";
import { createShadows } from "./shadows";

export const darkTheme: AppTheme = {
  dark: true,
  colors: darkColors,
  typography,
  fontWeights,
  fontFamilies,
  spacing,
  borderRadius,
  shadows: createShadows(true),
};
