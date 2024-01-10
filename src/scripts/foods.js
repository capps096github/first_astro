const foodsUrl = "https://kalyacourtsmenu.web.app/food_menu_webp/";
// Food Item Class
class FoodItem {
  constructor(name, fileName, description) {
    this.name = name;
    this.fileName = fileName;
    this.description = description;
  }

  //   getter url
  get url() {
    return `${foodsUrl}${this.fileName}`;
  }
}

// Food Item List from above arrays without using maps, but just declaring the array
export const foodItems = [
  new FoodItem("Menu Cover", "1-cover.webp", "Menu Cover"),
  new FoodItem("Alarcate Menu", "2-alarcate.webp", "Alarcate Menu"),
  new FoodItem("Starters Menu", "3-starters.webp", "Starters Menu"),
  new FoodItem("Fish Menu", "4-fish.webp", "Fish Menu"),
  new FoodItem("Chicken Menu", "5-chicken.webp", "Chicken Menu"),
  new FoodItem("Beef Goat Menu", "6-BeefGoat.webp", "Beef Goat Menu"),
  new FoodItem("Pork Pasta Menu", "7-PorkPasta.webp", "Pork Pasta Menu"),
  new FoodItem("Vegies Pizza Menu", "8-VegiesPizza.webp", "Vegies Pizza Menu"),
  new FoodItem(
    "Health Burgers Menu",
    "9-HealthBurgers.webp",
    "Health Burgers Menu"
  ),
  new FoodItem(
    "Indian Sandwiches Menu",
    "10-IndianSandwiches.webp",
    "Indian Sandwiches Menu"
  ),
  new FoodItem("Kids Menu", "11-Kids.webp", "Kids Menu"),
  new FoodItem("Desserts Menu", "12-DesertsMenu.webp", "Desserts Menu"),
  new FoodItem("Closure", "Closure.webp", "Closure"),
];

