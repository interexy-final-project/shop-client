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
import { ProductTypes } from "../../enums/product-types.enum";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setCategory, setType } from "../../app/category/store/category.slice";
import { getProducts } from "../../app/category/store/category.actions";
import { ProductCategories } from "../../enums/product-categories.enum";
import { useNavigate } from "react-router-dom";

export interface ITypeCardProps {
  image: string;
  typeName: ProductTypes;
  category: ProductCategories;
}

export const TypeCard: React.FC<ITypeCardProps> = ({
  image,
  typeName,
  category,
}) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState<ProductTypes | null>(null);

  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategories | null>(null);

  const dispatch: AppDispatch = useDispatch();

  const filter = useSelector((state: RootState) => state.products.filter);

  const handleCategory = (
    typeName: ProductTypes,
    category: ProductCategories,
  ): void => {
    setSelectedType(typeName);

    dispatch(setCategory(category));
    dispatch(setType(typeName));
    dispatch(getProducts(filter)); //первый клик просто byFilter, на второй клик выдает тип предыдущего клика
    navigate(`/category/?category=${category}&type=${typeName}`);
    console.log("click", typeName, category);
  };

  return (
    <Card>
      <CardMedia src={image} component="img" height="400" />
      <CardContent>
        <Typography variant="h5">{typeName}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleCategory(typeName, category)}>
          {t("main.exploreNow")}
        </Button>
      </CardActions>
    </Card>
  );
};
