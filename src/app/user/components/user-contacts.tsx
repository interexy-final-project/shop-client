import { Box, Divider, Typography, Stack } from "@mui/material";
import l from "../../../lang/l";
import ContactItem from "./contacts-item";
import AddressItem from "./address-item";

const UserContacts = () => {
  //GET UserInfo

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {l("userContacts.contactsTitle")}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {l("userContacts.contactsDetails")}
      </Typography>
      <Stack spacing={0.5} divider={<Divider />}>
        <ContactItem
          variant="common"
          data={{ name: l("userContacts.name"), value: "Name" }}
        />
        <ContactItem
          variant="common"
          data={{ name: l("userContacts.email"), value: "Name" }}
        />
        <ContactItem
          variant="common"
          data={{ name: l("userContacts.phone"), value: "Name" }}
        />
        <ContactItem
          variant="secured"
          data={{ name: l("userContacts.password"), value: "Name" }}
        />
      </Stack>
      <Typography variant="h5">Address</Typography>
      <Stack
        marginTop={2}
        direction={"row"}
        spacing={1}
        useFlexGap
        flexWrap="wrap"
      >
        <AddressItem />
        <AddressItem />
        <AddressItem />
      </Stack>
    </Box>
  );
};

export default UserContacts;
