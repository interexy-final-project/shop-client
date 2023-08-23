import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { theme } from "./assets/themes";
import AppRoutes from "./app.routers";
import CategoryPage from "./app/category/category.page";
import ProductDetails from "./app/product/product-details.page";
import { MainPage } from "./components/main-page";
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppRoutes />
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
