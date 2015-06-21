window.NoNet = (function(win, doc, undefined) {

	'use strict';

	// Our custom event
	var emitEvent = function (name) {
		var event = doc.createEvent('Event');
		event.initEvent(name, true, true);
		window.dispatchEvent(event);
	};

	var init = function (obj) {

		var options = obj || {};
		var eventOffline = options.eventOffline || "offline";
		var eventOnline = options.eventOnline || "online";
		var interval = options.interval || 10000;

		if ('onLine' in navigator) {
			(function checkOnline() {
				setTimeout(function () {
					if (!navigator.onLine) {
						emitEvent(eventOffline);
					} else {
						emitEvent(eventOnline);
					}
					checkOnline();
				}, interval);
			})();
		}
	};

	return {
		init: init
	};

})(window, document);
