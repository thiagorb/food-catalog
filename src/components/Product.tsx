import React from "react";
import { Product as ProductModel } from "../data";

interface Props {
  product: ProductModel;
}

export const Product: React.FC<Props> = ({ product }) => {
  return (
    <a href={product.url}>
      <img src={product.imageUrl} />
      <div>{product.name}</div>
      <div>{product.type}</div>
      <div>{product.description}</div>
      <div>More info</div>
    </a>
  );
};
