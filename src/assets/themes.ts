/* eslint-disable @typescript-eslint/no-empty-interface */
import { type PaletteColorOptions, createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "shop-size-button": true;
    "shop-color-button": true;
    "shop-size-button-selected": true;
    "shop-color-button-selected": true;
    "shop-add-to-card": true;
    "shop-price-button": true;
    "shop-price-button-similar-bar": true;
    "shop-purple-filled": true;
    "shop-white-button": true;
  }
}

declare module "@mui/material" {
  interface CustomPalette {
    ["red"]: PaletteColorOptions;
    ["green"]: PaletteColorOptions;
    ["primary"]?: PaletteColorOptions;
    ["primaryButtonHoverAndFocused"]?: PaletteColorOptions;
    ["primaryButtonDisabled"]?: PaletteColorOptions;
    ["black"]?: PaletteColorOptions;
    ["white"]?: PaletteColorOptions;
    ["secondary"]?: PaletteColorOptions;
    ["mainText"]?: PaletteColorOptions;
    ["grayMain"]?: PaletteColorOptions;
    ["lightGray"]?: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    red: true;
    green: true;
    black: true;
    lightgray: true;
  }
}
declare module "@mui/material/styles" {
  interface TypographyVariants {
    t1: React.CSSProperties;
    t2: React.CSSProperties;
    t3: React.CSSProperties;
    t4: React.CSSProperties;
    t5: React.CSSProperties;
    t6: React.CSSProperties;
    t7: React.CSSProperties;
    t8: React.CSSProperties;
    t9: React.CSSProperties;
    t10: React.CSSProperties;
    productDescription: React.CSSProperties;
    p: React.CSSProperties;
    label: React.CSSProperties;
    small: React.CSSProperties;
    tiny: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    t1?: React.CSSProperties;
    t2?: React.CSSProperties;
    t3?: React.CSSProperties;
    t4?: React.CSSProperties;
    t5?: React.CSSProperties;
    t6?: React.CSSProperties;
    t7: React.CSSProperties;
    t8: React.CSSProperties;
    t9: React.CSSProperties;
    t10: React.CSSProperties;
    p?: React.CSSProperties;
    label?: React.CSSProperties;
    small?: React.CSSProperties;
    tiny?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    t1: true;
    t2: true;
    t3: true;
    t4: true;
    t5: true;
    t6: true;
    t7: true;
    t8: true;
    t9: true; // breadCrumbs
    t10: true; //types-filter
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
  primaryPressed: "#63c8f4",
  red: "#DC143C",
  green: "#00FF00",
  primary: "#8A33FD",
  primaryButtonHoverAndFocused: "#6620C1",
  primaryButtonDisabled: "#EAEAEA",

  black: "#000000",
  white: "#FFFFFF",
  secondary: "#3C4242", // footer, some text
  mainText: "#807D7E",
  grayMain: "#F6F6F6", // inputs, counter buttons, etc.
  lightGray: "#BEBCBD", // tiny text
};

export const theme = createTheme({
  typography: {
    t1: {
      color: "#3C4242",
      fontFamily: "Poppins",
      fontSize: "2.125rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "140%", // Wrap in quotes to treat as a string
      letterSpacing: "0.0425rem",
    },
    t2: {
      color: "#3F4646",
      fontFamily: "Poppins",
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
    },
    t3: {
      color: "#3F4646",
      fontFamily: "Poppins",
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
    },
    t4: {
      color: "#807D7E",
      fontFamily: "Poppins",
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      letterSpacing: "0.44px",
    },
    t7: {
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "25px",
      letterSpacing: "0.02em",
      textAlign: "left",
      color: "#807D7E",
    },
    t8: {
      color: "#3C4242",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
    },
    t9: {
      color: "#807D7E",
      fontFamily: "Poppins",
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    t10: {
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "19px",
      letterSpacing: "0em",
      textAlign: "left",
      color: "#8A8989",
    },
    h1: {
      fontWeight: "bold",
      fontSize: "56px",
    },
    h2: {
      fontWeight: "bold",
      fontSize: "48px",
    },
    h3: {
      fontWeight: "bold",
      fontSize: "40px",
    },
    h4: {
      fontWeight: "bold",
      fontSize: "32px",
    },
    h5: {
      fontWeight: "bold",
      fontSize: "24px",
    },
    h6: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "20px",
    },
    p: { fontWeight: 400, fontSize: "16px", color: colors.mainText },
    label: { fontWeight: "bold", fontSize: "14px", color: colors.mainText },
    small: { fontWeight: "bold", fontSize: "12px" },
    tiny: { fontWeight: "bold", fontSize: "10px" },
  },
  palette: {
    red: {
      main: colors.red,
    },
    green: {
      main: colors.green,
    },
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
    grayMain: {
      main: colors.grayMain,
    },
    lightGray: {
      main: colors.lightGray,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "shop-color-button" },
          style: {
            height: "15px",
            width: "15px",
            borderRadius: "90%",
            color: "red",
            backgroundColor: "blue",
            marginRight: "22px",
            "&:hover": {
              backgroundColor: colors.secondary,
            },

            "&:active": {
              backgroundColor: colors.primaryPressed,
            },
          },
        },
        {
          props: { variant: "shop-price-button-similar-bar" },
          style: {
            color: "#3C4242",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            borderRadius: "8px",
            backgroundColor: "#F6F6F6",

            "&:hover": {
              backgroundColor: colors.secondary,
            },

            "&:active": {
              backgroundColor: colors.primaryPressed,
            },
          },
        },
        {
          props: { variant: "shop-color-button-selected" },
          style: {
            height: "15px",
            width: "15px",
            borderRadius: "90%",
            color: "red",
            backgroundColor: "blue",
            marginRight: "22px",
            "&:hover": {
              backgroundColor: colors.secondary,
            },

            "&:active": {
              backgroundColor: colors.primaryPressed,
            },
          },
        },
        {
          props: { variant: "shop-size-button" },
          style: {
            borderColor: "#BEBCBD",
            border: "2px solid #BEBCBD",
            color: "#3C4242",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "0.875rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",

            "&:hover": {
              backgroundColor: colors.secondary,
            },

            "&:active": {
              backgroundColor: colors.primaryPressed,
            },
          },
        },
        {
          props: { variant: "shop-size-button-selected" },
          style: {
            backgroundColor: "#3C4242",
            borderColor: "#BEBCBD",
            border: "2px solid #BEBCBD",
            color: colors.white,
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "0.875rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",

            "&:hover": {
              backgroundColor: colors.secondary,
            },

            "&:active": {
              backgroundColor: colors.primaryPressed,
            },
          },
        },
        {
          props: { variant: "shop-add-to-card" },
          style: {
            color: colors.white,
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            borderRadius: "0.5rem",
            background: "#8A33FD",
            textTransform: "none",
            "&:hover": {
              backgroundColor: colors.secondary,
            },

            "&:active": {
              backgroundColor: colors.primaryPressed,
            },
          },
        },
        {
          props: { variant: "shop-price-button" },
          style: {
            color: "#3C4242",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            borderRadius: "0.5rem",
            border: "1px solid #3C4242",
            "&:hover": {
              backgroundColor: colors.secondary,
            },

            "&:active": {
              backgroundColor: colors.primaryPressed,
            },
          },
        },
        {
          props: { variant: "shop-white-button" },
          style: {
            color: colors.secondary,
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "1.8rem",
            background: colors.white,
            padding: "1rem 4.5rem ",
            textTransform: "inherit",
            "&:hover": {
              backgroundColor: colors.lightGray,
              color: colors.white,
            },
          },
        },
        {
          props: { variant: "shop-purple-filled" },
          style: {
            color: colors.white,
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            borderRadius: "0.5rem",
            background: colors.primary,
            textTransform: "none",
            padding: "1rem 1.25rem",
            gap: "0.75rem",
            height: "2.75rem",
            width: "17rem",
            "&:hover": {
              backgroundColor: colors.primaryButtonHoverAndFocused,
            },

            "&:active": {
              backgroundColor: colors.primaryButtonHoverAndFocused,
            },
          },
        },
      ],
    },
  },
});
