import React, { HTMLAttributes } from "react";
import styles from "./Tag.module.css";
import { Color } from "csstype";

interface Props {
  color: Color;
}

export const Tag: React.FC<Props & HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <div
      {...props}
      color={undefined}
      className={`${props.className || ""} ${styles.tag}`}
      style={{ backgroundColor: props.color }}
    ></div>
  );
};
