export enum OrderSource {
  Shopify = "shopify",
  BigCommerce = "bigcommerce",
  Internal = "internal",
}

export class Order {
  source: OrderSource;
  shipments: Array<Shipment> = [];

  constructor(source: OrderSource) {
    this.source = source;
  }

  addShipment(shipment: Shipment) {
    this.shipments.push(shipment);
  }
}
