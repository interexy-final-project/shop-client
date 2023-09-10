import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import AppRoutes from "./app.routers";
import useDecodeToken from "./utils/decode-token";
import isTokenValid from "./utils/isTokenValid";

function App(): JSX.Element {
  const token = useDecodeToken();
  if(token) {
    isTokenValid(token)
  }

  return (
    <BrowserRouter>
      <CssBaseline />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
