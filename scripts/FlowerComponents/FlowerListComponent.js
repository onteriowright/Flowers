import { UseFlowers } from "./FlowerDataProvider.js";
import { FlowerComponent } from "./FlowerComponent.js";
import { UseFlowerRetailers } from "../FlowerRetailerComponents/FlowerRetailerDataProvider.js";
import { UseFlowerDistributer } from "../FlowerDistributorComponents/FlowerDistributorDataProvider.js";

export const FlowerListComponent = () => {
  const targetElement = document.querySelector("#container__flowers");

  const useFlowers = UseFlowers();
  const useRetailers = UseFlowerRetailers();
  const useDistributer = UseFlowerDistributer();

  const renderData = () => {
    targetElement.innerHTML = `
      <section class="flower-list">
        ${useFlowers
          .map(flower => {
            const findRetailers = useRetailers.filter(
              retailer => retailer.id === flower.retailerId
            );

            const findDistributer = useDistributer.filter(
              distributer => distributer.flowerId === flower.id
            );

            let html = FlowerComponent(flower, findRetailers, findDistributer);
            return html;
          })
          .join("")}
      </section>
    `;
  };
  renderData();
};
