import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import l from "../../../lang/l";
import { useState } from "react";

type ContactItemType = {
  variant: "common" | "secured";
  data: {
    name: string;
    value: string;
  };
};

const ContactItem = ({ variant, data }: ContactItemType) => {
  const [disabledInput, setDisable] = useState(true);

  return (
    <Box>
      <Typography>{data.name}</Typography>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {!disabledInput ? (
          <TextField
            variant="standard"
            type={variant === "secured" ? "password" : "text"}
            defaultValue={data.value}
          />
        ) : (
          <Typography>{data.value}</Typography>
        )}
        <Button onClick={() => setDisable(false)}>
          {l("userContacts.changeInfo")}
        </Button>
        {disabledInput? <></> : <Button>Confirm</Button>}
      </Stack>
    </Box>
  );
};

export default ContactItem;
