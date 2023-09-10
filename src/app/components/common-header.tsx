import { Box, Button, Menu, MenuItem, Paper, Stack } from "@mui/material";
import Logo from "../../assets/Logo.png";
import LanguageSelect from "./languageSelect";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../routes.enum";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../auth/store/auth.actions";

const CommonHeader = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("accessToken");
  const menuHandleClose = () => {
    setMenuOpen(false);
  };
  const handleLogOut = () => {
    dispatch<any>(logOut());
    navigate(RoutesEnum.MAIN);
  };

  const handleProfileClick = () => {
    navigate(RoutesEnum.USERPROFILE);
  };
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleProfileIconClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (isLoggedIn) {
      setAnchorEl(event.currentTarget);
      setMenuOpen(true);
    } else {
      navigate(RoutesEnum.SIGNIN);
    }
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
          {isLoggedIn && (
            <Menu open={menuOpen} onClose={menuHandleClose} anchorEl={anchorEl}>
              <MenuItem onClick={handleProfileClick}>
                {t("header.profile")}
              </MenuItem>
              <MenuItem onClick={handleLogOut}>{t("header.logOut")}</MenuItem>
            </Menu>
          )}
          <Button onClick={handleCart} variant="outlined">
            <ShoppingCartIcon />
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CommonHeader;
