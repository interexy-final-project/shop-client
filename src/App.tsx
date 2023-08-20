import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/themes";
import { CssBaseline } from "@mui/material";
import UserOrderList from "./app/user/components/user-orders-list";
import UserContacts from "./app/user/components/user-contacts";
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <UserContacts />
    </ThemeProvider>
  );
}

export default App;
