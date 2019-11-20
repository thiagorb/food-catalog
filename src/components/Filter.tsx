import React from "react";
import styles from "./Filter.module.css";
import { FilterOption } from "../data";
import { Tag } from "./Tag";
import { typeColorMap } from "./Product";

interface Props {
  options: FilterOption[];
  onClickOption: (option: string) => void;
}

const getCheckboxClasses = (option: FilterOption) => {
  const classes = [styles.checkbox];

  if (option.selected) {
    classes.push(styles["is-checked"]);
  }

  return classes.join(" ");
};

export const Filter: React.FC<Props> = ({ options, onClickOption }) => {
  return (
    <div className={styles.filter}>
      <div>Filter:</div>
      <ul className={styles.options}>
        {options.map(option => (
          <li
            className={styles.option}
            key={option.label}
            onClick={() => onClickOption(option.label)}
          >
            <Tag color={typeColorMap[option.label]}>
              <div className={getCheckboxClasses(option)}></div>
              {option.label}
            </Tag>
          </li>
        ))}
      </ul>
    </div>
  );
};
