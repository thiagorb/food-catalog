import React, { useState, useCallback } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { Grid } from "./components/Grid";
import { Product } from "./components/Product";
import { data } from "./data";

const App: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set<string>()
  );
  const filters = data.filterOptions.map(option => ({
    label: option,
    selected: selectedFilters.has(option)
  }));

  const visibleProducts =
    selectedFilters.size > 0
      ? data.products.filter(product => selectedFilters.has(product.type))
      : data.products;

  const handleFilterOptionClick = useCallback(
    option => {
      const newSelection = new Set(Array.from(selectedFilters.values()));
      if (newSelection.has(option)) {
        newSelection.delete(option);
      } else {
        newSelection.add(option);
      }
      console.log(selectedFilters, newSelection);
      setSelectedFilters(newSelection);
    },
    [selectedFilters]
  );

  return (
    <div className="container">
      <Header></Header>
      <Filter
        options={filters}
        onClickOption={handleFilterOptionClick}
      ></Filter>
      <Grid>
        {visibleProducts.map((product, index) => (
          <Product key={index} product={product}></Product>
        ))}
      </Grid>
    </div>
  );
};

export default App;
