import { foodItems } from "../scripts/foods.js";

x = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: foodItems.map((food, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: food.url,
    image: food.url,
    name: food.name,
    description: food.description,
  })),
};
