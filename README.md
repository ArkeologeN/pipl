pipl
==============

Pipl search api wrapper written for rest api in node

### Getting Started

Just like others, its simple and quick as per standard:

`npm install pipl --save`

this will install the module and add the entry in `package.json`. Lets start using it!

```javascript
var pipl = require('pipl')('apiKey here');
```

## Search API

Supports calls as per the documentation available at: [Pipl Search API](http://dev.pipl.com/docs/read/search_api/introduction).

```javascript

pipl.search.query('json', {"email": "hamzawaqas@live.com"}, function(err, data) {
    // Here you go
});
```

## Name API

`TBD` - Accepting pull request for it.

## Thumbnail API

`TBD` - Accepting pull request for it.

## Contributor

The wrapper has been initialized by [Hamza Waqas](http://twitter.com/HamzaWaqas).