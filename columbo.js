/*!
 * ColumboJS.0.2.js
 * @author Gabor Zsoter
 *
 *
 * Usage example
 * ------------------
 *
 * Load component's inline js scripts within this closure
 * and pass in jQuery reference for example:
 *
 * Columbo.add("name_of_your_component", function($) {
 *
 *    ... your script here
 *
 * });
 *
 *
 * Then call them in the footer
 *
 * Columbo.run(jQuery);
 *
 */

 (function (w, undefined) {

    "use strict";

    var NAMESPACE = "Columbo";

    var exports = {};
    var collector = [];
	
	/*
	 * Turn on/off logging @ console
	 */
    var log = true;

    var debug = function (msg, type) {
        var level = type || "info";
        var color = level === "error" ? "red" : "green";
        log && w.console && w.console[level] && w.console[level]('%c' + NAMESPACE + "JS %c-> " + msg, 'color:blue;font-weight:bold;font-size:1.2em' , 'color:'+color+';font-style:italic;');
    };

    exports.add = function (name, func) {
        debug("REGISTERED:: " + name , "warn");
        collector.push([name, func]);
    };

    exports.run = function ($) {
        $.each(collector, function (i, el) {
			debug(el[0], "group");
            try {
                el[1]($);
            } catch (err) {
                debug(
                    "Your script failed: \n\n\tComponent: '" + el[0] + "'\n\n" +
                    "\tError: " + err.message + "\n", "error");

            }
			debug(el[0], "groupEnd");
            debug("Script has been executed | '" + el[0] + "' | @row: " + (i + 1));
            el.length = 0;
        });
    };

    w[NAMESPACE] = exports;

    debug("Listening!");

}(window, undefined));
