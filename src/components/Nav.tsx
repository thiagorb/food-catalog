import React from "react";
import styles from "./Nav.module.css";

export const Nav: React.FC = ({ children }) => {
  return (
    <nav className={styles.nav}>
      {React.Children.map(children, child => (
        <div className={styles.item}>{child}</div>
      ))}
    </nav>
  );
};
