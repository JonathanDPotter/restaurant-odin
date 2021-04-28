import bahnMi from "/src/images/bahn_mi.jpeg";
import currTemp from "/src/images/curried_tempeh.jpeg";
import gardVeg from "/src/images/garden_veggie.jpeg";
import oyMush from "/src/images/oyster_mushroom.jpeg";
import spicyMeatball from "/src/images/spicy_meatball.jpeg";
import tofuSalad from "/src/images/tofu_salad.jpeg";

const menuItems = [
  [
    "Garden Veggie",
    gardVeg,
    "Fresh avocado, tomato, and cucumber on country wheat.",
  ],
  [
    "Oyster Mushroom",
    oyMush,
    "Smoky sauteed oyster mushrooms, tomatoes, lettuce, and avocado on country wheat.",
  ],
  [
    "Spicy Meatball",
    spicyMeatball,
    "Now that's a spicy meatball!  Gardein meatballs, marinara and Violife parmesan on an italian roll",
  ],
  [
    "Tofu Salad",
    tofuSalad,
    "Eggy, creamy tofu salad with pickles, letuce, and tomato on country wheat.",
  ],
  [
    "Curried Tempeh",
    currTemp,
    "Savory curried tempeh with cashews, raisins, celery and carrots on a ciabatta roll.",
  ],
  [
    "Bahn mi",
    bahnMi,
    "Our sweet, sour, spicy take on traditional vietnamese sandwiches.  Grilled tofu, pickled veggies and fresh cilantro on demi baguette.",
  ],
];

class MenuItem {
  constructor(name, image, description) {
    this.name = name;
    this.image = image;
    this.description = description;
  }

  makeItem() {
    const item = document.createElement("div");
    item.classList = "menu-item";

    const itemName = document.createElement("h3");
    itemName.textContent = this.name;

    const itemImage = document.createElement("img");
    itemImage.classList = "item-image";
    itemImage.src = this.image;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = this.description;

    item.appendChild(itemName);
    item.appendChild(itemImage);
    item.appendChild(itemDescription);

    return item;
  }
}

const menu = document.createElement("div");
menu.className = "invis";
const menuTitle = document.createElement("h2");
menuTitle.textContent = "Menu";
menu.appendChild(menuTitle);
menuItems.forEach((arr) => {
  let item = new MenuItem(arr[0], arr[1], arr[2]);
  menu.appendChild(item.makeItem());
});

export default menu;
