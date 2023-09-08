import { useEffect } from "react";
import { Box, Divider, Typography, Stack } from "@mui/material";
import ContactItem from "./contacts-item";
import AddressItem from "./address-item";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/user.actions";
import { userSelector } from "../store/user.selectors";
import useDecodeToken from "../../../utils/decode-token";
import { useTranslation } from "react-i18next";

const UserContacts = () => {
  const { t } = useTranslation();
  const token = useDecodeToken();
  const dispatch = useDispatch();
  useEffect(() => {
    token && dispatch<any>(getUser(token?.id));
  }, []);
  const { user } = useSelector(userSelector);

  return user ? (
    <Box>
      <Typography variant="h5" gutterBottom>
        {t("userContacts.contactsTitle")}
      </Typography>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Stack spacing={0.5} divider={<Divider />}>
          <Typography variant="h6" gutterBottom>
            {t("userContacts.contactsDetails")}
          </Typography>
          <ContactItem
            variant="common"
            data={{
              name: t("userContacts.firstName"),
              value: user.firstName,
            }}
          />
          <ContactItem
            variant="common"
            data={{
              name: t("userContacts.lastName"),
              value: user.lastName,
            }}
          />
          <ContactItem
            variant="common"
            data={{ name: t("userContacts.email"), value: user.email }}
          />
          <ContactItem
            variant="common"
            data={{ name: t("userContacts.phone"), value: user.phone }}
          />
        </Stack>

        <Stack>
          <Typography variant="h5">{t("userContacts.address")}</Typography>
          <AddressItem />
        </Stack>
      </Stack>
    </Box>
  ) : null;
};

export default UserContacts;
