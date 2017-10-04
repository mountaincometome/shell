/**
 * core/pointer
 *
 * TODO: Add some docstring
 */


/**
 * TODO: Add some docstring
 */
export default class Pointer {
    /**
     * TODO: Add some docstring
     */
    constructor(observable, zone_id) {
        this._observable = observable;
        this._zoneId = zone_id;

        this._indicated = null;
        this._highlighted = null;

        this._initialize();
    }

    /**
     * TODO: Add some docstring
     */
    _initialize() {
        var zone = document.getElementById(this._zoneId);
        zone.onmousemove = (event) => this._mouseMoved(event);
    }

    /**
     * TODO: Add some docstring
     */
    _mouseMoved(event) {
        var pos_x = event.clientX;
        var pos_y = event.clientY;

        this._observable.trigger('Pointer.moved', pos_x, pos_y);
    }
}
