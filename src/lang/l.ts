import { useTranslation } from "react-i18next";

const l = (tag: string): string => {
  const { t } = useTranslation();

  return t(tag);
};

export default l;
