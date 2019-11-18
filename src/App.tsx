import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Filter, FilterOption } from "./components/Filter";
import { Grid } from "./components/Grid";
import { Product } from "./components/Product";
import { data, Product as ProductModel } from "./data";

const getFilterOptions = (products: ProductModel[]) => {
  const options: FilterOption[] = [];
  const found: { [type: string]: boolean } = {};

  products.forEach(product => {
    if (!found[product.type]) {
      found[product.type] = true;
      options.push({ selected: false, label: product.type });
    }
  });

  return options;
};

const App: React.FC = () => {
  return (
    <div className="container">
      <Header></Header>
      <Filter options={getFilterOptions(data.products)}></Filter>
      <Grid>
        {data.products.map(product => (
          <Product product={product}></Product>
        ))}
      </Grid>
    </div>
  );
};

export default App;
