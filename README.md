# Vintage popup

Vintage popup window plugin

## Overview

* [Installation](#installation)
* [Initialization](#initialization)
* [Examples](#examples)
* [Options](#options)
* [Methods](#methods)
* [Requirement](#requirement)

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

### There are several ways to initialize popup module.

```javascript
// Initialize popup on the elements with 'data-popup-target' attribute.
Popup.initialize();

// Initialize popup on the elements with 'data-popup-target' attribute
// and change some options for example.
Popup.initialize({
  bodyFixedOnDesktop: false
});

// Initialize popup on the div elements with 'data-popup-remote' attribute.
Popup.initialize('div[data-popup-remote]');

// Initialize popup on the elements with 'ex' class.
// Disable some options for example.
Popup.initialize('.ex', {
  closeOnBgClick: false,
  closeOnEsc: false
});

// Initialize popup on the elements with 'ex' class.
// jQuery way.
$('.ex').popup();

// Initialize popup on the elements with 'remotePopup' class.
// Add remote data source for example.
$('.remotePopup').popup({
  remote: {
    url: 'ajax/example.json'
  }
});
```

## Examples

## Default popup

```html
<!-- Button trigger modal -->
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

## Popup with remote data source

```html
<!-- Button trigger modal -->
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

## Options

### closeOnBgClick

Type: `Boolean`

Default: `true`

If true, closes the popup by clicking anywhere outside it.

### bodyFixedOnDesktop

Type: `Boolean`

Default: `true`

If true, sets position: fixed to the body on desktop.

### closeOnEsc

Type: `Boolean`

Default: `true`

If true, closes the popup after pressing the ESC key.

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

Type: `Object|Boolean|String`

Default: `Button's ['data-popup-remote'] value or false`

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

Popup remote settings (or just AJAX request url).

### remote.url

Type: `String`

Default: `n/a`

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

### Non-static

```javascript
// Initialize first
$('.popupButton').popup({
  targetPopupId: 'examplePopup'
});

// Get access to popup's instance
var popupInstance = $('[data-popup-id="examplePopup"]').data('popup');

// Use methods

// Open popup
popupInstance.open();

// With remote data
popupInstance.open(ajaxResponse);

// Close popup
popupInstance.close();

// Kill popup instance
popupInstance.kill();
```

### Static

```javascript
/**
 * Kill specified popup.
 *
 * @static
 * @param {String|jQuery} popup
 */
Popup.kill(popup);

/**
 * Close all popups.
 *
 * @static
 * @param {String} [openedClass='opened'] - opened popup class indicator
 */
Popup.closeAllPopups(openedClass);

/**
 * Initialize popup/popups with specified options.
 *
 * @static
 * @param {String} [selector='[data-popup-target]']
 * @param {Object} [options]
 */
Popup.initialize(selector, options);
```

## Requirement

[jQuery 1.9.1+](http://jquery.com/)

## Versioning

Current version is 0.1.24
