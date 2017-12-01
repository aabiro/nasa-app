// 'use strict';
//
// //-- Require
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
// const dragonsJson = require('./dragons.json');
// const config = require('./config.js');
// // var morgan     = require('morgan');
// //
// // // configure app
// // app.use(morgan('dev')); // log requests to the console
//
// //-- JWT check
//
// const jwtCheck = jwt({
//     secret: jwks.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: `https://${config.CLIENT_DOMAIN}/.well-known/jwks.json`
//     }),
//     audience: config.AUTH0_AUDIENCE,
//     issuer: `https://${config.CLIENT_DOMAIN}/`,
//     algorithm: 'RS256'
// });
//
// //--- Set up app
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
//
// var mongoose   = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/bears', { useMongoClient: true }); // connect to our database
//
// // Handle the connection event
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
//
// db.once('open', function() {
//   console.log("DB connection alive");
// });
//
// // Bear models lives here
// var Bear = require('../src/app/models/bear');
//
// // ROUTES FOR OUR API
// // =============================================================================
//
// // create our router
// var router = express.Router();
//
// // middleware to use for all requests
// router.use(function(req, res, next) {
// 	// do logging
// 	console.log('Something is happening.');
// 	next();
// });
//
// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// // router.get('/', function(req, res) {
// // 	res.json({ message: 'hooray! welcome to our api!' });
// // });
//
// router.get('/', function(req, res) {
//     res.json({ message: 'Hello World' });
// });
//
//
// // serve files in static' folder at root URL '/'
// app.use('/', express.static('static'));
//
// // on routes that end in /bears
// // ----------------------------------------------------
// router.route('/bears')
//
// 	// create a bear (accessed at POST http://localhost:8080/bears)
// 	.post(function(req, res) {
// 		console.log(req.body);
// 		var bear = new Bear();		// create a new instance of the Bear model
// 		bear.name = req.body.name;  // set the bears name (comes from the request)
//
// 		bear.save(function(err) {
// 			if (err)
// 				res.send(err);
//
// 			res.json({ message: 'Bear created!' + req.body.name });
// 			console.log("Bear created: " + bear.name);
// 		});
//
//
// 	})
//
// 	// get all the bears (accessed at GET http://localhost:8080/api/bears)
// 	.get(function(req, res) {
// 		Bear.find(function(err, bears) {
// 			if (err)
// 				res.send(err);
//
// 			res.json(bears);
// 		});
// 	});
//
// // on routes that end in /bears/:bear_id
// // ----------------------------------------------------
// router.route('/bears/:bear_id')
//
// 	// get the bear with that id
// 	.get(function(req, res) {
// 		Bear.findById(req.params.bear_id, function(err, bear) {
// 			if (err)
// 				res.send(err);
// 			res.json(bear);
// 		});
// 	})
//
// 	// update the bear with this id
// 	.put(function(req, res) {
// 		Bear.findById(req.params.bear_id, function(err, bear) {
//
// 			if (err)
// 				res.send(err);
//
// 			bear.name = req.body.name;
// 			bear.save(function(err) {
// 				if (err)
// 					res.send(err);
//
// 				res.json({ message: 'Bear updated!' });
// 			});
//
// 		});
// 	})
//
// 	// delete the bear with this id
// 	.delete(function(req, res) {
// 		Bear.remove({
// 			_id: req.params.bear_id
// 		}, function(err, bear) {
// 			if (err)
// 				res.send(err);
//
// 			res.json({ message: 'Successfully deleted' });
// 		});
// 	});
const https = require('https');



// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');
// Config
const config = require('./config');

/*
 |--------------------------------------
 | MongoDB
 |--------------------------------------
 */

mongoose.connect(config.MONGO_URI, { useMongoClient: true });
const monDb = mongoose.connection;

monDb.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that', config.MONGO_URI, 'is running.');
});

monDb.once('open', function callback() {
  console.info('Connected to MongoDB:', config.MONGO_URI);
});

//var app = express();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());

const port = process.env.PORT || '8081';
app.set('port', port);

require('./api')(app, config);

var router = express.Router();
router.use(function(req, res, next) {
    //console.log(res);
    console.log('Something is happening');
    next();
});

app.use('/api', router);
app.listen(port, () => console.log(`Server running on localhost:${port}`));
