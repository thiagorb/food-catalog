import React from "react";

export interface FilterOption {
  selected: boolean;
  label: string;
}

interface Props {
  options: FilterOption[];
}

export const Filter: React.FC<Props> = ({ options }) => {
  return (
    <div>
      <div>Filter:</div>
      <ul>
        {options.map(option => (
          <li>{option.label}</li>
        ))}
      </ul>
    </div>
  );
};
