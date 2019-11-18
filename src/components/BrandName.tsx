import React from "react";

interface Props {
  brandName: string;
}

export const BrandName: React.FC<Props> = ({ brandName }) => {
  return <div>{brandName}</div>;
};
