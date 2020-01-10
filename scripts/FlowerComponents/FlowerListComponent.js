import { UseFlowers } from "./FlowerDataProvider.js";
import { FlowerComponent } from "./FlowerComponent.js";
import { UseFlowerRetailers } from "../FlowerRetailerComponents/FlowerRetailerDataProvider.js";

export const FlowerListComponent = () => {
  const targetElement = document.querySelector("#container__flowers");

  const useFlowerRetailers = UseFlowerRetailers();
  console.log(useFlowerRetailers);

  const renderData = flowerCollection => {
    targetElement.innerHTML = `
    <section class="flower-list">
    ${flowerCollection.map(flower => FlowerComponent(flower)).join("")}
    </section>
    `;
  };
  const useFlowers = UseFlowers();
  renderData(useFlowers);
};
