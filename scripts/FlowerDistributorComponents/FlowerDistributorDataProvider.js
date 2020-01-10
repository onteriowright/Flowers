let flowerDistributerCollection = [];

export const UseFlowerDistributer = () => flowerDistributerCollection.slice();

export const getFlowerDistributer = () => {
  return fetch("http://localhost:3000/flowerDistributors")
    .then(res => res.json())
    .then(
      parsedFlowerDistributer =>
        (flowerDistributerCollection = parsedFlowerDistributer.slice())
    );
};
