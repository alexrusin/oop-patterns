import { Order, OrderSource } from "./order.js";

export default abstract class TrackingInfoSender {
  protected order: Order;
  constructor(order: Order) {
    this.order = order;
  }
  abstract sendTracking(): void;

  static getSender(order: Order): TrackingInfoSender {
    let sender = new EmailTrackingInfoSender(order);
    switch (order.source) {
      case OrderSource.Shopify:
        sender = new ShopifyTrackingInfoSender(order);
        break;
      case OrderSource.BigCommerce:
        sender = new BigCommerceTrackingInfoSender(order);
        break;
      default:
        sender = new EmailTrackingInfoSender(order);
    }

    return sender;
  }
}

class ShopifyTrackingInfoSender extends TrackingInfoSender {
  constructor(order: Order) {
    super(order);
  }
  sendTracking(): void {
    console.log("Sending tracking information to Shopify");
  }
}

class BigCommerceTrackingInfoSender extends TrackingInfoSender {
  constructor(order: Order) {
    super(order);
  }
  sendTracking(): void {
    console.log("Sending tracking information to BigCommerce");
  }
}

class EmailTrackingInfoSender extends TrackingInfoSender {
  constructor(order: Order) {
    super(order);
  }
  sendTracking(): void {
    console.log("Emailing tracking information to the customer");
  }
}
