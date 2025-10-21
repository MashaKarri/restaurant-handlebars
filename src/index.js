import dishesListData from "./data/dishes.json";
import dishesTemplate from "./templates/dishes.hbs";

const dishesList = dishesTemplate(dishesListData);

const area = document.querySelector(".area");
area.innerHTML = dishesList;