import { Box, Button, Paper, Stack } from "@mui/material";
import Logo from "../../assets/Logo.png";
import LanguageSelect from "./languageSelect";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../routes.enum";

const CommonHeader = () => {
  const navigate = useNavigate();

  const handleProfileIconClick = () => {
    navigate(RoutesEnum.SIGNIN);
  };

  const handleCart = () => {
    navigate(RoutesEnum.CART);
  };
  return (
    <Box padding={1} component={Paper}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box component="img" alt="logo" src={Logo} width={90} height={45} />
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <LanguageSelect />
          <Button variant="outlined" onClick={handleProfileIconClick}>
            <PersonIcon />
          </Button>
          <Button variant="outlined" onClick={handleCart}>
            <ShoppingCartIcon />
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CommonHeader;
