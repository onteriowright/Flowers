let flowerCollection = [];

export const UseFlowers = () => flowerCollection.slice();

export const getFlowers = () => {
  return fetch("http://localhost:3000/flowers")
    .then(res => res.json())
    .then(parsedFlowers => (flowerCollection = parsedFlowers.slice()));
};
