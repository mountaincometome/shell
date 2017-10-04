/**
 * core/element
 *
 * TODO: Add some docstring
 */


/**
 * Observer
 */
class Pointer {
    /**
     * TODO: Add some docstring
     */
    moved(pos_x, pos_y) {
        this._indicate(pos_x, pos_y);
        this._lowlight();
        this._highlight();
    }
}


/**
 * Attributes:
 * _indicated
 * _highlighted
 * _originalBorder -- border settings of the selected element
 */
export default class Element {
    /**
     * TODO: Add some docstring
     */
    constructor(observable) {
        this._observable = observable;

        this._indicated = null;
        this._highlighted = null;
        this._originalBorder = null;

        this._initialize();
    }

    /**
     * TODO: Add some docstring
     */
    _initialize() {
        this._observable.on(
            'Pointer.moved',
            (...args) => (
                Pointer.prototype['moved'].call(this, ...args)
            )
        );
    }

    /**
     * TODO: Add some docstring
     */
    _indicate(pos_x, pos_y) {
        this._indicated = document.elementFromPoint(pos_x, pos_y);

        if (this._indicated && this._indicated.tagName === undefined) {
            // => in case of text nodes (Opera) =>
            // => the parent node will be selected
            this._indicated = this._indicated.parentNode;
        }
    }

    /**
     * TODO: Add some docstring
     */
    _lowlight() {
        if (this._highlighted && (this._highlighted !== this._indicated)) {
            // => there was previously selected element and mouse isn't over
            // the previously selected element =>
            // Restores the border settings of the previously selected element
            this._highlighted.style.border = this._originalBorder;

            this._highlighted = null;
            this._originalBorder = null;
        }
    }

    /**
     * TODO: Add some docstring
     */
    _highlight() {
        if (!this._highlighted && this._indicated) {
            var node_tag = this._indicated.tagName.toLowerCase();
            // The body and the html tag won't be selected
            if ((node_tag != 'body') && (node_tag != 'html')) {
                if (node_tag == 'li') {
                    // Stores the `ul` or `ol` tag element
                    this._highlighted = this._indicated.parentNode;
                }
                else {
                    this._highlighted = this._indicated;
                }
                // Stores the border settings of the selected element
                this._originalBorder = this._highlighted.style.border;
                // Draws selection border
                this._highlighted.style.border = '2px solid red';
            }
        }
    }
}
