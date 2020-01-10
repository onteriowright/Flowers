import { getFlowers } from "./FlowerComponents/FlowerDataProvider.js";
import { FlowerListComponent } from "./FlowerComponents/FlowerListComponent.js";

getFlowers().then(FlowerListComponent);
