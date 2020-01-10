export const FlowerComponent = flower => {
  return `
    <section class="flower-component">
    <div class="flower-component-info">Flower Name: ${flower.name}</div>
    <img src="${flower.img}" class="flower-size flower-component-info">
    <div class="flower-component-info">Flower Color: ${flower.color}</div>
    </section>
  `;
};
