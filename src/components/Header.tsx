import React from "react";
import { BrandName } from "./BrandName";
import { Nav } from "./Nav";
import { config } from "../config";
import styles from "./Header.module.css";

export const Header: React.FC = ({ children }) => {
  return (
    <header className={styles.header}>
      <BrandName brandName={config.brandName}></BrandName>
      <Nav>
        <a href="/">Menu Item 1</a>
        <a href="/">Menu Item 2</a>
        <a href="/">Menu Item 3</a>
        <a href="/">Menu Item 4</a>
        <a href="/">Menu Item 5</a>
        <a href="/">Menu Item 6</a>
      </Nav>
    </header>
  );
};
