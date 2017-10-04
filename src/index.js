/**
 * index
 *
 * TODO: Add some docstring
 */

import riot from 'riot';
import route from 'riot-route';

import './tags/app-navigation.tag';
import './tags/app-workspace.tag';
import './tags/app-help.tag';


function ready() {
    let SharedObservable = {
        observable: riot.observable()
    };

    riot.mount('*');
    riot.mixin(SharedObservable);
    route.start(true);
}


document.addEventListener('DOMContentLoaded', ready);
