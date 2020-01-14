import { getFlowers } from "./FlowerComponents/FlowerDataProvider.js";
import { FlowerListComponent } from "./FlowerComponents/FlowerListComponent.js";
import { getFlowerRetailers } from "./FlowerRetailerComponents/FlowerRetailerDataProvider.js";
import { getFlowerDistributer } from "./FlowerDistributorComponents/FlowerDistributorDataProvider.js";

getFlowers()
  .then(getFlowerRetailers)
  .then(getFlowerDistributer)
  .then(FlowerListComponent);
