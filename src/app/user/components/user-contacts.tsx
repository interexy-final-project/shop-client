import { Box, Divider, Typography, Stack } from "@mui/material";
import ContactItem from "./contacts-item";
import AddressItem from "./address-item";
import { useTranslation } from "react-i18next";

const UserContacts = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {t("userContacts.contactsTitle")}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {t("userContacts.contactsDetails")}
      </Typography>
      <Stack spacing={0.5} divider={<Divider />}>
        <ContactItem
          variant="common"
          data={{ name: t("userContacts.name"), value: "Name" }}
        />
        <ContactItem
          variant="common"
          data={{ name: t("userContacts.email"), value: "Name" }}
        />
        <ContactItem
          variant="common"
          data={{ name: t("userContacts.phone"), value: "Name" }}
        />
        <ContactItem
          variant="secured"
          data={{ name: t("userContacts.password"), value: "Name" }}
        />
      </Stack>
      <Typography variant="h5">{t("userContacts.address")}</Typography>
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
