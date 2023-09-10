export class Section {
    constructor({items, renderer}) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector('.elements__list');
    }

    addItem(element) {
        const renderedItem = this._renderer(element);
        this._container.prepend(renderedItem);
    }

    renderItems() {
        this._items.forEach((item) => {
            this.addItem(item);
        })
    }
}

