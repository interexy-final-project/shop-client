import {
  RadioGroup,
  Stack,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  styled,
} from "@mui/material";
import React from "react";
import l from "../../../lang/l";

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
  return (
    <Box>
      <NameBox>
        <Typography variant="t4">{l("filter.price")}</Typography>
        <Typography variant="t4"></Typography>
      </NameBox>
      <NameBox>
        <RadioGroup>
          <Stack spacing={2}>
            <Stack>
              <FormControlLabel
                value="descending"
                control={<Radio />}
                label={
                  <Typography variant="h6" color={"mainText.main"}>
                    {l("filter.desc")}
                  </Typography>
                }
              />
            </Stack>
            <Stack>
              <FormControlLabel
                value="ascending"
                control={<Radio />}
                label={
                  <Typography variant="h6" color={"mainText.main"}>
                    {l("filter.asc")}
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
