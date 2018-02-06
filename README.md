pipl
==============

Pipl search api wrapper written for rest api in Node.

### Getting Started

Just like others, it's simple and quick as per standard:

`npm install pipl --save`

This will install the module and add the entry in `package.json`. Lets start using it!

```javascript
var pipl = require('pipl')('apiUrl', 'apiKey');
```

Example using v5 API url:
```javascript
var pipl = require('pipl')('http://api.pipl.com/search/v5/', 'apiKey');
```

## Search API

Supports calls as per the documentation available at: [Pipl Search API](https://docs.pipl.com/reference).

```javascript

pipl.search.query({"email": "hamzawaqas@somewhere.com"}, function(err, data) {
    // Here you go
});
```

## Name API

`TBD` - Accepting pull request for it.

## Thumbnail API

`TBD` - Accepting pull request for it.

## Contributor

The wrapper has been initialized by [Hamza Waqas](http://twitter.com/HamzaWaqas).
