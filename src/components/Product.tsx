import React from "react";
import { Product as ProductModel } from "../data";
import styles from "./Product.module.css";
import { Tag } from "./Tag";
import { Color } from "csstype";

export const typeColorMap: { [type: string]: Color } = {
  Meat: "#e73c01",
  Fruit: "#f39200",
  Vegetable: "#2b9030"
};

interface Props {
  product: ProductModel;
}

export const Product: React.FC<Props> = ({ product }) => {
  return (
    <a href={product.url} className={styles.product}>
      <img src={product.imageUrl} />
      <div className={styles.text}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.type}>
          <Tag color={typeColorMap[product.type]}>{product.type}</Tag>
        </div>
        <div className={styles.description}>{product.description}</div>
        <div className={styles.more}>
          <div
            className={styles.caret}
            style={{ borderColor: typeColorMap[product.type] }}
          ></div>
          More info
        </div>
      </div>
    </a>
  );
};
