/**
 * tags/app-navigation
 *
 * TODO: Add some docstring
 */

import route from 'riot-route';


export default class AppNavigation {
    /**
     * TODO: Add some docstring
     */
    constructor(tag) {
        this._tag = tag;

        this._initialize();
    }

    /**
     * TODO: Add some docstring
     */
    _initialize() {
        this._tag.links = [
            {name: 'H', url: 'home'},
            {name: 'F', url: 'first'},
            {name: 'S', url: 'second'}
        ];
        this._tag.selectedId = null;

        var router = route.create();
        router('*', (id) => this._workspaceSwitched(id));
        router((id) => this._dummy(id));
    }

    _workspaceSwitched(id) {
        this._tag.selectedId = id;
        this._tag.update();
    }

    _dummy(id) {
        if (id === '') {
            this._workspaceSwitched('home');
        }
        else {
            this._tag.selectedId = null;
            this._tag.update();
        }
    }
}
