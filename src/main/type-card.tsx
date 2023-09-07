import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ITypeCardProps {
  image: string;
  typeName: string;
}

export const TypeCard: React.FC<ITypeCardProps> = ({ image, typeName }) => {
  const navigate = useNavigate();

  console.log(image);
  return (
    <Card>
      <CardMedia src={image} component="img" height="400" />
      <CardContent>
        <Typography variant="h5">{typeName}</Typography>
      </CardContent>
      <CardActions>
        <Button>Explore now!</Button>
      </CardActions>
    </Card>
  );
};
