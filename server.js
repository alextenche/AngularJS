
var path = require('path'),
	fs =  require('fs'),
	http = require('http'),
	express = require('express');
	
// ==================
// Database
// ==================

var mongoose = 
		require('mongoose')
			.connect("mongodb://localhost:27017/angular-resource"),
		db = mongoose.connection;
		
mongoose.set('debug', true);