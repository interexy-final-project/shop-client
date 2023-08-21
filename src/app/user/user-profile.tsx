import React, { useState } from "react";
import CommonBreadcrumbs from "../components/breadcrumbs";
import CommonHeader from "../components/common-header";
import Footer from "../components/footer";
import { Box, Stack, Tabs, Tab, Typography } from "@mui/material";
import UserContacts from "./components/user-contacts";
import UserOrderList from "./components/user-orders-list";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import l from "../../lang/l";

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
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e: React.SyntheticEvent, tabIndex: number) => {
    setCurrentTabIndex(tabIndex);
  };

  return (
    <Stack height={"100vh"}>
      <CommonHeader />
      <CommonBreadcrumbs />
      <Stack
        padding={3}
        spacing={2}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Typography variant="h4">Hello Boyyy</Typography>
          <Typography>Welcome to your Account</Typography>
          <Tabs
            variant="fullWidth"
            orientation="vertical"
            value={currentTabIndex}
            onChange={handleTabChange}
            sx={{ width: 200, padding: 0 }}
          >
            <Tab
              icon={<PersonIcon />}
              label={l("userProfile.myInfo")}
              iconPosition="start"
            />
            <Tab
              icon={<ShoppingBagIcon />}
              label={l("userProfile.myOrders")}
              iconPosition="start"
            />
          </Tabs>
        </Stack>
        <TabPanel value={currentTabIndex} index={0}>
          <UserOrderList />
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
