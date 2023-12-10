import { Order, OrderSource } from "../strategyPattern/order.js";
import TrackingInfoSender from "../strategyPattern/trackingInfo.js";
import ShippingServiceObserver from "./ShippingServiceObserver.js";
import ShippingService from "./ShippingService.js";

class TrackingInfoSenderService extends ShippingServiceObserver {
  doUpdate(shippingService: ShippingService): void {
    const order = shippingService.getOrder();
    const trackingInfoSender = TrackingInfoSender.getSender(order);
    trackingInfoSender.sendTracking();
  }
}

export default function runObserverPattern() {
  const order = new Order(OrderSource.BigCommerce);
  const shippingService = new ShippingService(order);
  new TrackingInfoSenderService(shippingService);
  shippingService.createShipment({ trackingNumber: "123456" });
}
