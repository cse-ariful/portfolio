import { useMemo } from 'react';

export const useTheme = () => {
  const theme = useMemo(() => ({
    colors: {
      primary: "#4F46E5",
      secondary: "#7C3AED",
      text: {
        primary: "#f3f4f6",
        secondary: "#e5e7eb",
        accent: "#a5b4fc"
      },
      background: {
        primary: "#0f172a",
        secondary: "#1e293b"
      }
    },
    gradients: {
      primary: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
    }
  }), []);

  return theme;
}; 