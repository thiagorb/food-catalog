import React from "react";
import styles from "./Grid.module.css";

export const Grid: React.FC = ({ children }) => {
  return (
    <div className={styles.grid}>
      {React.Children.map(children, child => (
        <div className={styles.item}>{child}</div>
      ))}
    </div>
  );
};
