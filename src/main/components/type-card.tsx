import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export interface ITypeCardProps {
  image: string;
  typeName: string;
  handleCategory: () => void;
}

export const TypeCard: React.FC<ITypeCardProps> = ({
  image,
  typeName,
  handleCategory,
}) => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardMedia src={image} component="img" height="400" />
      <CardContent>
        <Typography variant="h5">{typeName}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleCategory}>{t("main.exploreNow")}</Button>
      </CardActions>
    </Card>
  );
};
