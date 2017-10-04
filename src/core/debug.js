/**
 * core/debug
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
        if (!this._node) {
            this._node = document.getElementById(this._nodeId);
        }

        if (this._node) {
            // Displays the coordinates used for the elementFromPoint method
            this._node.innerHTML = 'X: ' + pos_x + '  Y: ' + pos_y;
        }
    }
}


/**
 * Attributes:
 * _nodeId
 * _node
 */
export default class Debug {
    /**
     * TODO: Add some docstring
     */
    constructor(observable, node_id) {
        this._observable = observable;
        this._nodeId = node_id;

        this._node = null;

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
}
