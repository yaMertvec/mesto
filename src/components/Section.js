export class Section {
<<<<<<< HEAD
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems(items) {
    items.reverse().forEach(item => {
      this.addItem(item)
    });
  }
  addItem(item) {
    this._container.prepend(this._renderer(item));
=======
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item)
    });
  }
  addItem(element) {
    this._container.prepend(element)
>>>>>>> 3917d6fe9ca259db4071796672c1ac4da3e1de87
  }
}
