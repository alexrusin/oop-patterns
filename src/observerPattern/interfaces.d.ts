interface Observable {
  attach(observer: Observer);
  detach(observer: Observer);
  notify();
}

interface Observer {
  update(observable: Observable);
}
