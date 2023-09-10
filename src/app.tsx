import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import AppRoutes from "./app.routers";
import useDecodeToken from "./utils/decode-token";
import isTokenValid from "./utils/isTokenValid";
import ErrorBoundary from "./components/error-boundary";

function App(): JSX.Element {
  const token = useDecodeToken();
  if (token) {
    isTokenValid(token);
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
