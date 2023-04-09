import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    fontFamily: string;
    fontSize: string;
    palette: {
      primary: {
        main: string;
        dark: string;
      };
      secondary: {
        main: string;
        dark: string;
      };
      warning: {
        main: string;
      };
      success: {
        main: string;
      };
      error: {
        main: string;
      };
      textColor: {
        primary: string;
        secondary: string;
      };
      grey: {
        100: string;
        200: string;
      };
      bodyBg: string;
      borderColor: string;
      backdrop: string;
      modalBg: string;
      tableBg: string;
      tableHeadingBg: string;
      tableRowBg: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
