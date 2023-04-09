import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  fontFamily: "system-ui,-apple-system,'Segoe UI' ,Roboto, 'Helvetica Neue'",
  fontSize: "16px",
  palette: {
    primary: { main: "#1976d2", dark: "#1565c0" },
    secondary: { main: "#9e9e9e", dark: "#757575" },
    warning: { main: "#ed6c02" },
    success: { main: "#2e7d32" },
    error: { main: "#d32f2f" },
    bodyBg: "#fff",
    textColor: {
      primary: "#fff",
      secondary: "#000",
    },
    grey: {
      100: "#e0e0e0",
      200: "#bdbdbd",
    },
    borderColor: "#fff",
    backdrop: "rgba(0, 0, 0, 0.5)",
    modalBg: "#fff",
    tableBg: "#fff",
    tableHeadingBg: "#6c7ae0",
    tableRowBg: "#f8f6ff",
  },
  spacing: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "32px",
  },
};

export default defaultTheme;
