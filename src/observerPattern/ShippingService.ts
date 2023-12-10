import { Order } from "../strategyPattern/order.js";

export default class ShippingService implements Observable {
  private observers: Array<Observer> = [];
  private order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  getOrder() {
    return this.order;
  }

  createShipment(shipment: Shipment) {
    this.order.addShipment(shipment);
    this.notify();
  }

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  detach(observer: Observer) {
    this.observers = this.observers.filter(
      (item: Observer) => item !== observer
    );
  }

  notify() {
    this.observers.forEach((item: Observer) => item.update(this));
  }
}
