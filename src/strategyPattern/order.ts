export enum OrderSource {
  Shopify = "shopify",
  BigCommerce = "bigcommerce",
  Internal = "internal",
}

export class Order {
  source: OrderSource;

  constructor(source: OrderSource) {
    this.source = source;
  }
}
