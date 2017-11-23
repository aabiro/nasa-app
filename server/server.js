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
//
//
// // const https = require('https');
// //
// // https.get('https://api.nasa.gov/planetary/apod?api_key=MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV', (resp) => {
// //   let data = '';
// //
// //   // A chunk of data has been recieved.
// //   resp.on('data', (chunk) => {
// //     data += chunk;
// //   });
// //
// //   // The whole response has been received. Print out the result.
// //   resp.on('end', () => {
// //     console.log(JSON.parse(data).explanation);
// //   });
// //
// // }).on("error", (err) => {
// //   console.log("Error: " + err.message);
// // });
//
// // const request = require('request');
// //
// // request('https://api.nasa.gov/planetary/apod?api_key=MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV', { json: true }, (err, res, body) => {
// //   if (err) { return console.log(err); }
// //
// //   console.log(body.url);
// //   console.log(body.explanation);
// // });
// //
// // console.log(request.body);
// //
// // console.log(request.body.text);
//
// // --- GET protected dragons route
// // app.get('https://api.nasa.gov/planetary/apod?api_key=MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV', jwtCheck, function (req, res) {
// //   console.log(res);
// //   res.json(dragonsJson);
// //
// // });
//
// //--- Port
// app.listen(8081);
// console.log('Listening on localhost:3001');


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const https = require('https');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Start server on port 8081
// It is important to start Node on a different port
var port = 8081;

var router = express.Router();

router.use(function(req, res, next) {
    console.log(res);
    console.log('Something is happening');
    next();
});

router.get('/', function(req, res) {
let data = '';

https.get('https://api.nasa.gov/planetary/apod?api_key=MiPeV23XBjdbZie9qxzZlVwuE4XObLn68C3BcWjV', (resp) => {

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation); //this prints
    console.log(JSON.parse(data).url);
    //var obj = {copyright: }
    //res.json(JSON.stringify(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
    res.json(data); //want to send this instead
});

app.use('/api', router);

app.listen(port);
console.log('Server is running on port ' + port)
