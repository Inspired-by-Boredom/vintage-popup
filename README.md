# Vintage popup

Vintage popup window plugin. Check out [demo](https://inspired-by-boredom.github.io/vintage-popup/).

## Overview

* [Installation](#installation)
* [Initialization](#initialization)
* [Examples](#examples)
* [Options](#options)
* [Methods](#methods)
* [Requirement](#requirement)
* [Versioning](#versioning)

## Installation

With npm

```
npm i -S vintage-popup
```

With yarn

```
yarn add vintage-popup
```

Add popup to your project

AMD

```javascript
require(['vintage-popup'], function (Popup) {});
```

CommonJS

```javascript
var Popup = require('vintage-popup');
```

ES6 (Webpack)

```javascript
import Popup from 'vintage-popup';
```

Inline

```html
<script src="vintage-popup.js"></script>
```

Include CSS file

```html
<link href="vintage-popup.css" rel="stylesheet">
<link href="popup-default-theme.css" rel="stylesheet">
```

## Initialization

### Default initialization

```javascript
// initialize popup
$('button').popup();

// initialize with options
$('button').popup({
  closeOnEsc: false
});
```

### Initialization with webpack's "import"

```javascript
// import popup module
import Popup from 'vintage-popup';

// fix jQuery conflict (once)
Popup.expose($);

// use it!
$('button').popup();
```

## Examples

### Default popup

```html
<!-- Button which triggers modal -->
<button type="button" data-popup-target="example">
  Default popup
</button>

<!-- Popup -->
<div class="popup" data-popup-id="example" tabindex="-1" role="dialog">
    <div class="popup__container">
        <div class="popup__close"><span></span><span></span></div>
        <div class="popup__content">
            <div class="popup__title">Popup title</div>
            <div class="popup__body">Popup body</div>
        </div>
    </div>
</div>
```

### Popup with remote data source

```html
<!-- Button that triggers modal -->
<button type="button" data-popup-target="exampleRemote" data-popup-remote="/path/example.json">
  Remote popup
</button>

<!-- Popup -->
<div class="popup" data-popup-id="exampleRemote" tabindex="-1" role="dialog">
    <div class="popup__container">
        <div class="popup__close"><span></span><span></span></div>
        <div class="popup__content"></div>
    </div>
</div>
```

### example.json

```json
{
  "replaces": [
    {
      "what": "[data-popup-id='exampleRemote'] .popup__content",
      "data": "<div class='popup__content'><div class='popup__title'>Popup title</div><div class='popup__body'>Popup body</div></div>"
    }
  ]
}
```

## Themes

Currently, there are 2 animation themes available:

* Default (popup-default-theme)
* Material (popup-material-theme)

To use them, simply import the corresponding css file

## Options

### closeOnBgClick

Type: `Boolean`

Default: `true`

If true, closes the popup by clicking anywhere outside it.

### closeOnEsc

Type: `Boolean`

Default: `true`

If true, closes the popup after pressing the ESC key.

### closeOnResize

Type: `Boolean`

Default: `false`

If true, closes the popup when the size of the browser window changes.

### openOnClick

Type: `Boolean`

Default: `true`

Open popup when clicking on element.

### lockScreen

Type: `Boolean`

Default: `true`

Add 'padding-right' to element specified by 'lockScreenEl' option.
Padding depends on the width of the scrollbar.

### lockScreenEl

Type: `jQuery|HTML`

Default: `document.body`

Element to add padding.

### preventDefault

Type: `Boolean`

Default: `false`

Prevent default action on button click.

### eventsNameSpace

Type: `String`

Default: `'popup'`

Attached jQuery events namespace.

### targetPopupId

Type: `String`

Default: `Button's ['data-popup-target'] value`

Popup to open (its `[data-popup-id]` value).

### closeBtnSelector

Type: `String`

Default: `'.popup__close'`

Popup's 'close' button selector.

### openedClass

Type: `String`

Default: `'opened'`

Class added to the popup when popup is opened.

### openedBodyClass

Type: `String`

Default: `'popup-opened'`

Class added to the body when popup is opened.

### beforeOpen

Type: `Function`

Default: `n/a`

Parameter: `popup`

Example:
```javascript
$('.popupButton').popup({
  beforeOpen: function (popup) {
    console.log('Popup will open');
  }
});
```

Fires before popup will open.

### afterOpen

Type: `Function`

Default: `n/a`

Parameter: `popup`

Fires when popup opened.

### beforeClose

Type: `Function`

Default: `n/a`

Parameter: `popup`

Fires before popup will close.

### afterClose

Type: `Function`

Default: `n/a`

Parameter: `popup`

Fires when popup closed.

### remote

Type: `Object`

Default: `Object`

Example:
```javascript
$('.popupButton').popup({
  remote: {
    url: 'ajax/request/path',
    onComplete: function (XHR, textStatus) {
      console.log('AJAX finished');
    }
  }
});
```

Popup remote settings.

### remote.url

Type: `String`

Default: `Button's ['data-popup-remote'] value or undefined`

AJAX url.

### remote.data

Type: `Any`

Default: `n/a`

AJAX data to send.

### remote.onBeforeSend

Type: `Function`

Default: `n/a`

Parameter: `[XHR, AJAXsettings]`

AJAX 'beforeSend' callback.

### remote.onComplete

Type: `Function`

Default: `n/a`

Parameter: `[XHR, textStatus]`

AJAX 'complete' callback.

### remote.onError

Type: `Function`

Default: `n/a`

Parameter: `[XHR, textStatus, errorThrown]`

AJAX 'error' callback.

## Methods

### Instance method

```javascript
// initialize and get access to popup's instance
// (if inited on multiple jQuery objects returns an array of instances)
var popupInstance = $('button').popup();

// open popup
popupInstance.open();

// close popup
popupInstance.close();

// kill popup instance
popupInstance.kill();

// open with remote data
popupInstance.open(ajaxResponse);
```

### Static methods

```javascript
/**
 * Close all popups.
 *
 * @static
 * @param {String} [openedClassName='opened']
 */
Popup.closeAllPopups(openedClassName);

/**
 * Kill specified popup.
 *
 * @static
 * @param {String|jQuery} popup
 */
Popup.kill(popup);

/**
 * Expose popup module as jquery plugin.
 * Use before initialazing popup.
 * (fixes jquery conflict when using webpack's "import")
 *
 * @static
 * @param {jQuery} jQuery
 */
 Popup.expose($);
```

## Requirement

[jQuery 1.9.1+](http://jquery.com/)

## Versioning

Current version is 0.1.10
