import { getFlowers } from "./FlowerComponents/FlowerDataProvider.js";
import { FlowerListComponent } from "./FlowerComponents/FlowerListComponent.js";
import { getFlowerRetailers } from "./FlowerRetailerComponents/FlowerRetailerDataProvider.js";

getFlowers()
  .then(getFlowerRetailers)
  .then(FlowerListComponent);
