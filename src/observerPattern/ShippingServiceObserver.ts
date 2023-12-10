import ShippingService from "./ShippingService.js";

export default abstract class ShippingServiceObserver implements Observer {
  protected shippingService: ShippingService;

  constructor(shippingService: ShippingService) {
    this.shippingService = shippingService;
    this.shippingService.attach(this);
  }

  update(observable: Observable) {
    if (observable === this.shippingService) {
      this.doUpdate(this.shippingService);
    }
  }

  abstract doUpdate(shippingService: ShippingService): void;
}
