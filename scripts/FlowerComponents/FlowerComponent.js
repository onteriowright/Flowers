export const FlowerComponent = (flower, retailer, distributer) => {
  return `
    <section class="flower-component">
    <div class="flower-component-info">Retailer Name:<br> ${retailer
      .map(retailer => retailer.name)
      .join(", ")}</div>
    <img src="${flower.img}" class="flower-size flower-component-info">
    <div class="flower-component-info">Distributor:<br> ${distributer.map(
      distribution => distribution.name
    )}</div>
    <div class="flower-component-info">Address:<br> ${distributer.map(
      distribution => distribution.address
    )}</div>
      </section>
  `;
};
