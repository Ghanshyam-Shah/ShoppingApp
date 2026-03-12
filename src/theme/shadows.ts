// ⚠️ iOS aur Android shadow system ALAG hai
// iOS = shadow* properties
// Android = elevation property
// Dono ek saath likhne chahiye

export const createShadows = (isDark: boolean) => {
  const shadowColor = isDark ? "#000000" : "#000000";

  return {
    none: {
      shadowColor: "transparent",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    sm: {
      shadowColor,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: isDark ? 0.3 : 0.08,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.4 : 0.12,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: isDark ? 0.5 : 0.16,
      shadowRadius: 8,
      elevation: 8,
    },
    xl: {
      shadowColor,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: isDark ? 0.6 : 0.2,
      shadowRadius: 16,
      elevation: 12,
    },
  };
};
