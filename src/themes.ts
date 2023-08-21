import { createTheme, type PaletteColorOptions } from "@mui/material";

declare module "@mui/material" {
  interface CustomPalette {
    ["primary"]?: PaletteColorOptions;
    ["primaryButtonHoverAndFocused"]?: PaletteColorOptions;
    ["primaryButtonDisabled"]?: PaletteColorOptions;
    ["black"]?: PaletteColorOptions;
    ["white"]?: PaletteColorOptions;
    ["secondary"]?: PaletteColorOptions;
    ["mainText"]?: PaletteColorOptions;
    ["greyMain"]?: PaletteColorOptions;
    ["lightGrey"]?: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    p: React.CSSProperties;
    label: React.CSSProperties;
    small: React.CSSProperties;
    tiny: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    p?: React.CSSProperties;
    label?: React.CSSProperties;
    small?: React.CSSProperties;
    tiny?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
    label: true;
    small: true;
    tiny: true;
  }
}

declare module "@mui/material" {
  interface Color {
    main: string;
  }
}

export const colors = {
  primary: "#8A33FD",
  primaryButtonHoverAndFocused: "#6620C1",
  primaryButtonDisabled: "#EAEAEA",

  black: "#000000",
  white: "#FFFFFF",
  secondary: "#3C4242", // footer, some text
  mainText: "#807D7E",
  greyMain: "#F6F6F6", // inputs, counter buttons, etc.
  lightGrey: "#BEBCBD", // tiny text
};

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontWeight: "bold",
      fontSize: "56px",
    },
    h2: {
      fontWeight: "",
      fontSize: "48px",
    },
    h3: {
      fontWeight: "",
      fontSize: "40px",
    },
    h4: {
      fontWeight: "",
      fontSize: "32px",
    },
    h5: {
      fontWeight: "",
      fontSize: "24px",
    },
    h6: {
      fontWeight: "",
      fontSize: "20px",
    },
    p: { fontWeight: "", fontSize: "16px" },
    label: { fontWeight: "", fontSize: "14px", color: colors.mainText },
    small: { fontWeight: "", fontSize: "12px" },
    tiny: { fontWeight: "", fontSize: "10px" },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    primaryButtonHoverAndFocused: {
      main: colors.primaryButtonHoverAndFocused,
    },
    primaryButtonDisabled: {
      main: colors.primaryButtonDisabled,
    },
    black: {
      main: colors.black,
    },
    white: {
      main: colors.white,
    },
    secondary: {
      main: colors.secondary,
    },
    mainText: {
      main: colors.mainText,
    },
    greyMain: {
      main: colors.greyMain,
    },
    lightGrey: {
      main: colors.lightGrey,
    },
  },
});
