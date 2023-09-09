import {
  RadioGroup,
  Stack,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { setPrice } from "../store/category.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";

const NameBox = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(1.25),
  paddingTop: theme.spacing(1.25),
  paddingLeft: theme.spacing(1.9),
  paddingRight: theme.spacing(1.9),
  border: "1px solid #BEBCBD",
  justifyContent: "space-between",
  display: "flex",
}));

export const PriceFilter: React.FC = () => {
  const { t } = useTranslation();
  const [isAscending, setIsAscending] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const handleRadioChange = (event: any) => {
    dispatch(setPrice(event.target.value));
  };

  return (
    <Box>
      <NameBox>
        <Typography variant="t4">{t("filter.price")}</Typography>
        <Typography variant="t4"></Typography>
      </NameBox>
      <NameBox>
        <RadioGroup onChange={handleRadioChange}>
          <Stack spacing={2}>
            <Stack>
              <FormControlLabel
                value={false}
                control={<Radio />}
                label={
                  <Typography variant="h6" color={"mainText.main"}>
                    {t("filter.desc")}
                  </Typography>
                }
              />
            </Stack>
            <Stack>
              <FormControlLabel
                value={true}
                control={<Radio />}
                label={
                  <Typography variant="h6" color={"mainText.main"}>
                    {t("filter.asc")}
                  </Typography>
                }
              />
            </Stack>
          </Stack>
        </RadioGroup>
      </NameBox>
    </Box>
  );
};
