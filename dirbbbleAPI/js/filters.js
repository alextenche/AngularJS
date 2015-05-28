'use strict';

var filters = angular.module('dribble.filters', []);

filters.filter('dribbbleDate', function ($filter) {

	return function (value, format) {
		console.log(value, format);
		if(value){
			value = Date.parse(value);
		}
		return $filter('date')(value, format);
	}
})
