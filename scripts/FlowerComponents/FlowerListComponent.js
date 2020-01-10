import { UseFlowers } from "./FlowerDataProvider.js";
import { FlowerComponent } from "./FlowerComponent.js";

export const FlowerListComponent = () => {
  const targetElement = document.querySelector("#container__flowers");

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
