/**
 * core/loader
 *
 * TODO: Add some docstring
 */

const RX_HTML_TAG = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;


export default class Loader {
    /**
     * TODO: Add some docstring
     */
    constructor(receiver_id) {
        this._receiverId = receiver_id;
        this._request = null;

        this._initialize();
    }

    /**
     * TODO: Add some docstring
     */
    load(url) {
        try {
            this._request.open('GET', url, true);
            this._request.send();
        }
        catch (error) {
            alert('Unable to connect to the server');
        }
    }

    /**
     * TODO: Add some docstring
     */
    _initialize() {
        if (window.XMLHttpRequest) {
            this._request = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            this._request = new ActiveXObject('Microsoft.XMLHTTP');
        }
        else {
            // TODO: Throw some exception
        }

        this._request.onreadystatechange = () => this._loadPage();
    }

    /**
     * TODO: Add some docstring
     */
    _loadPage() {
        if ((this._request.readyState == 4) && (this._request.status == 200)) {
            var html = this._htmlPrefilter(this._request.responseText);
            document.getElementById(this._receiverId).innerHTML = html;
        }
    }

    /**
     * TODO: Add some docstring
     */
    _htmlPrefilter(html) {
	return html.replace(RX_HTML_TAG, '<$1></$2>');
    }
}
