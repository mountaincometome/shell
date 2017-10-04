/**
 * tags/app-help
 *
 * TODO: Add some docstring
 */

import route from 'riot-route';


const HELPS = {
    home: 'Click the navigation on the left edge.',
    first: 'This is the help for the first page.',
    second: 'This is the help for the second page.'
};


export default class AppHelp {
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
        let router = route.create();
        router('*', (id) => this._workspaceSwitched(id));
        router((id) => this._dummy(id));
    }

    _workspaceSwitched(id) {
        this._tag.helptext = HELPS[id] || 'Help not found.';
        this._tag.update();
    }

    _dummy(id) {
        if (id === '') {
            this._workspaceSwitched('home');
        }
    }
}
