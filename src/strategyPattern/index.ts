import { Order, OrderSource } from "./order.js";
import TrackingInfoSender from "./trackingInfo.js";

const orders = [
  new Order(OrderSource.Shopify),
  new Order(OrderSource.Internal),
];

const trackingInfoSenders = orders.map((order) =>
  TrackingInfoSender.getSender(order)
);

function sendTrackingInfo(trackingInfoSender: TrackingInfoSender) {
  trackingInfoSender.sendTracking();
}

export default function runStrategyPattern() {
  trackingInfoSenders.forEach((sender) => sendTrackingInfo(sender));
}
