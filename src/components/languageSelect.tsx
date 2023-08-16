import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState, SetStateAction, useEffect } from "react";
import i18n from "../i18n";
import l from "../lang/l";
import uk_flag from "../assets/uk-flag.png";
import ru_flag from "../assets/russia-flag-round-circle-icon.png";

const LanguageSelect = () => {
  const [language, setLanguage] = useState<"ru" | "en">("ru");
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as SetStateAction<"ru" | "en">);
  };
  return (
    <FormControl>
      <Select value={language} onChange={handleChange}>
        <MenuItem value={"ru"}>
          {l("language.russian")}
          {<Box sx={{ width: 20 }} component="img" src={ru_flag} />}
        </MenuItem>
        <MenuItem value={"en"}>
          {l("language.english")}
          {<Box sx={{ width: 20 }} component="img" src={uk_flag} />}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
