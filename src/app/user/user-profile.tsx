import React, { useState } from "react";
import CommonHeader from "../components/common-header";
import Footer from "../components/footer";
import { Box, Stack, Tabs, Tab, Typography } from "@mui/material";
import UserOrderList from "./components/user-orders-list";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import UserContacts from "./components/user-contacts";
import { useTranslation } from "react-i18next";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      width={"100%"}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

const UserProfile = () => {
  const { t } = useTranslation();
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e: React.SyntheticEvent, tabIndex: number) => {
    setCurrentTabIndex(tabIndex);
  };

  return (
    <Stack height={"100vh"}>
      <CommonHeader />
      <Stack
        padding={3}
        spacing={2}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Typography variant="h4">{t("userProfile.hello")}</Typography>
          <Typography>{t("userProfile.welcome")}</Typography>
          <Box
            component={Tabs}
            variant="fullWidth"
            orientation="vertical"
            value={currentTabIndex}
            onChange={handleTabChange}
            width={200}
            padding={0}
          >
            <Tab
              icon={<PersonIcon />}
              label={t("userProfile.myInfo")}
              iconPosition="start"
            />
            <Tab
              icon={<ShoppingBagIcon />}
              label={t("userProfile.myOrders")}
              iconPosition="start"
            />
          </Box>
        </Stack>
        <TabPanel value={currentTabIndex} index={0}>
          <UserContacts />
        </TabPanel>
        <TabPanel value={currentTabIndex} index={1}>
          <UserOrderList />
        </TabPanel>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default UserProfile;
