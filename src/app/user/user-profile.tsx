import CommonBreadcrumbs from "../components/breadcrumbs";
import CommonHeader from "../components/common-header";
import Footer from "../components/footer";
import { Stack, Tabs } from "@mui/material";

const UserProfile = () => {
  
  return (
    <Stack>
      <CommonHeader />
      <CommonBreadcrumbs />
      <Tabs></Tabs>
      <Footer />
    </Stack>
  );
};

export default UserProfile;
