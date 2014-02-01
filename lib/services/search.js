/**
 * @author  Hamza Waqas <hamzawaqas@live.com>
 * @since   1/26/14
 */

(function() {

    var _ = require('lodash');

    var Search = function(Inherits, config) {

        Inherits(this);
        this.query = function(format, options, cb) {
            options = _.merge(options, {key: config.apiKey});
            this.createCall('GET', format + "/", options, cb)(config);
        };
        return this;
    }.bind(this);

    module.exports = Search;
}).call(this);