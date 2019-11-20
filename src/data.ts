export interface Product {
  name: string;
  imageUrl: string;
  description: string;
  url: string;
  type: string;
}

export interface FilterOption {
  selected: boolean;
  label: string;
}

const products = [
  {
    name: "Apple",
    imageUrl: "https://picsum.photos/300/200?random=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",
    url: "/apple",
    type: "Fruit"
  },
  {
    name: "Eggplants",
    imageUrl: "https://picsum.photos/300/200?random=2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",
    url: "/eggplants",
    type: "Vegetable"
  },
  {
    name: "Banana",
    imageUrl: "https://picsum.photos/300/200?random=3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",
    url: "/banana",
    type: "Fruit"
  },
  {
    name: "Broccoli",
    imageUrl: "https://picsum.photos/300/200?random=4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",
    url: "/broccoli",
    type: "Vegetable"
  },
  {
    name: "Chicken",
    imageUrl: "https://picsum.photos/300/200?random=5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",
    url: "/chicken",
    type: "Meat"
  },
  {
    name: "Orange",
    imageUrl: "https://picsum.photos/300/200?random=6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",
    url: "/orange",
    type: "Fruit"
  },
  {
    name: "Beef",
    imageUrl: "https://picsum.photos/300/200?random=7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",
    url: "/Beef",
    type: "Meat"
  },
  {
    name: "Zucchini",
    imageUrl: "https://picsum.photos/300/200?random=8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",
    url: "/Zucchini",
    type: "Vegetable"
  }
];

const filterOptions = Array.from(
  new Set<string>(products.map(p => p.type)).values()
);

export const data = {
  products,
  filterOptions
};
