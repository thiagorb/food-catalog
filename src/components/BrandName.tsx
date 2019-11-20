import React from "react";
import styles from "./BrandName.module.css";

interface Props {
  brandName: string;
}

export const BrandName: React.FC<Props> = ({ brandName }) => {
  return <div className={styles.brand}>{brandName}</div>;
};
