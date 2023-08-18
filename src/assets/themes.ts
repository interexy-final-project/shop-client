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
  }
}

declare module "@mui/material" {
  interface CustomPalette {
    ["red"]: PaletteColorOptions;
    ["green"]: PaletteColorOptions;
    ["black"]: PaletteColorOptions;
    ["lightgray"]: PaletteColorOptions;
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
    productDescription: React.CSSProperties;
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
  }
}

export const colors = {
  primary: "#DDD571",
  primaryPressed: "#63c8f4",
  secondary: "#60dcba",
  white: "#FFFFFF",
  red: "#DC143C",
  green: "#00FF00",
  black: "#000000",
  lightgray: "#F6F6F6",
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
  },
  palette: {
    red: {
      main: colors.red,
    },
    black: {
      main: colors.black,
    },
    green: {
      main: colors.green,
    },
    lightgray: {
      main: colors.lightgray,
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
      ],
    },
  },
});
