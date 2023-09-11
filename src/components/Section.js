export class Section {
    constructor({ items, renderer, container }) {
        this._items = items;
        this._renderer = renderer;
        this._container = container;
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this._items.forEach((item) => {
            const renderedItem = this._renderer(item);
            this.addItem(renderedItem);
        });
    }
}

