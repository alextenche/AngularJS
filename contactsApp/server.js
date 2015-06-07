var express = require('express'),
	api     = require('./api'),
	users   = require('./accounts'),
	path    = require('path'),
    app     = express();

app
	.use(express.static('./public'))
	.use(users)
	.use('/api', api)
	.get('*', function(req, res){
		if (!req.user){
			res.redirect('/login');
		} else {
			res.sendFile('public/main.html', { root: __dirname });
			//res.sendFile('public/main.html');
			//res.sendFile('main.html', { root: path.join(__dirname, 'public') });
		}
	})
	.listen(3000);