import { useState } from "react";
import { Paper, TextField, Stack, Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const AddressItem = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const formBody = {
    city: watch("city"),
    street: watch("street"),
    postalCode: watch("postalCode"),
  };

  const [disabledInput, setDisable] = useState(true);

  const handleEditClick = () => {
    setDisable(false);
  };

  const onSubmit = () => {
    setDisable(true);
  };

  return (
    <Box component={Paper} bgcolor="#F6F6F6" padding={2}>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Stack component={"form"} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            disabled={disabledInput}
            label={t("addressForm.city")}
            {...register("city")}
          ></TextField>
          <TextField
            disabled={disabledInput}
            label={t("addressForm.street")}
            {...register("street")}
          ></TextField>
          <TextField
            disabled={disabledInput}
            label={t("addressForm.postalCode")}
            {...register("postalCode")}
          ></TextField>
        </Stack>
        <IconButton onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default AddressItem;
