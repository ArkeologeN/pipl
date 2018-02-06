/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @since   1/14/14
 */

(function() {

    var _ = require('lodash');

    var Main = function(apiKey, apiUrl) {
        var _services = ['name', 'search', 'thumbnail']
            , Inherits = require('./inherits')
            , self = this;

        // Make some configuration;
        this.options = {
            api_url: apiUrl || 'http://api.pipl.com/search/v4/',
            apiKey: apiKey
        };

        _services.forEach(function(service) {
            module.exports[service] = require(__dirname + '/services/' + service)(Inherits, self.options);
        });

        return module.exports;
    }.bind(this);

    module.exports = Main;
}).call(this);
