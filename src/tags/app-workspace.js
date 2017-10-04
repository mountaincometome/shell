/**
 * tags/app-workspace
 *
 * TODO: Add some docstring
 */

import riot from 'riot';
import route from 'riot-route';

import Debug from '../core/debug';
import Element from '../core/element';
import Pointer from '../core/pointer';
import Loader from '../core/loader';


const PAGES = {
    'home': {
        'title': 'Home of the great app',
        'body': 'Timeline or dashboard as you like!'
    },
    'first': {
        'title': 'First feature of your app',
        'body': 'It could be a list of something for example.'
    },
    'second': {
        'title': 'Second feature of your app',
        'body': 'It could be a config page for example.'
    }
};
const API_URL = 'http://127.0.0.1:8080/origin/';


export default class AppWorkspace {
    /**
     * TODO: Add some docstring
     */
    constructor(tag) {
        this._tag = tag;

        this._debug = null;
        this._element = null;
        this._pointer = null;
        this._loader = null;

        this._initialize();
    }

    /**
     * TODO: Add some docstring
     */
    _initialize() {
        let router = route.create();
        router('*', (id) => this._workspaceSwitched(id));
        router((id) => this._dummy(id));

        let observable = riot.observable();

        this._debug = new Debug(observable, /*node_id=*/'debug-info');
        this._element = new Element(observable);
        this._pointer = new Pointer(observable, /*zone_id=*/'origin');

        let origin_url = 'https://en.wikipedia.org/wiki/Pink_Floyd';
        let url = API_URL + encodeURIComponent(origin_url);

        this._loader = new Loader(/*receiver_id=*/'origin');
        this._loader.load(url);
    }

    _workspaceSwitched(id) {
        if (id in PAGES) {
            this._tag.update(PAGES[id]);
        }
        else {
            this._dummy(id);
        }
    }

    _dummy(id) {
        if (id === '') {
            this._workspaceSwitched('home');
        }
        else {
            this._tag.update(
                {
                    title: '404',
                    body: 'The page "' + id + '" not found.'
                }
            );
        }
    }
}
