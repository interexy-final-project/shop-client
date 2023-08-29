import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export interface ITypeCardProps {
  id: string;
  image: string;
  typeName: string;
}

export const TypeCard: React.FC<ITypeCardProps> = ({ image, typeName, id }) => {
  return (
    <Card key={id}>
      <CardMedia image={image} />
      <CardContent>
        <Typography>{typeName}</Typography>
      </CardContent>
      <CardActions>
        <Button>Explore now!</Button>
      </CardActions>
    </Card>
  );
};
