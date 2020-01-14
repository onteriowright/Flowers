let flowerRetailerCollection = [];

export const UseFlowerRetailers = () => flowerRetailerCollection.slice();

export const getFlowerRetailers = () => {
  return fetch("http://localhost:3000/retailers")
    .then(res => res.json())
    .then(
      parsedFlowerRetailers =>
        (flowerRetailerCollection = parsedFlowerRetailers.slice())
    );
};
