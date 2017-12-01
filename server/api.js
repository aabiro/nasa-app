// api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */
const Collection = require('./models/collection');
const Image = require('./models/image');
const Dcma = require('./models/dcma');
const Privacy = require('./models/privacy');

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const http = require('http');
const request = require('request');

module.exports = function(app, config) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: 'RS256'
  });

  // GET API root
  // app.get('/api', (req, res) => {
  //   //url = 'https://images-api.nasa.gov/search?q=mars';
  //   res.send('API works');
  // });
const bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

app.get('/api', (req, res) => {
  request.get('https://images-api.nasa.gov/search?q=mars', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      res.json(body);
      });
  });

app.get('/api/dcma', (req, res) => {  //works
  		Dcma.find(function(err, dcma) {
  			if (err)
  				res.send(err);
  			res.json(dcma);
  		});
  	});

app.post('/api/dcma', function(req, res) {   //works

  var d = new Dcma();      // create a new instance
  d.description = req.body.description;

  d.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'Dcma updated!' });
  });

});

app.delete('/api/dcma', function(req, res) {
  Dcma.remove({
      //_id: req.params.bear_id
  }, function(err, bear) {
      if (err)
          res.send(err);

      res.json({ message: 'Successfully deleted' });
  });
});

app.get('/api/collections', (req, res) => {
  		Collection.find(function(err, collection) {
  			if (err)
  				res.send(err);
  			res.json(collection);
  		}).sort({ratings: -1})
      //.limit(10).sort({ratings: -1})
  	});


app.post('/api/collections', (req, res) => {

  var c = new Collection();
  c.title = req.body.title;
  c.description = req.body.description;
  c.isPrivate = req.body.isPrivate;
  c.isDisabled = req.body.isDisabled;
  c.images = req.body.images;
  c.ratings = req.body.ratings;
  // save and check for errors
  c.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'collection created!' });
  });

});





app.get('/collections/:collection_id', (req, res) => {
      Collection.findById(req.params.collection_id, function(err, col) {
          if (err)
              res.send(err);
          res.json(col);
        //  console.log(col);
      });
  });

  app.put('/collections/:collection_id', (req, res) => {
      Collection.findById(req.params.collection_id, function(err, c) {

    c.title = req.body.title;
    c.description = req.body.description;
    c.isPrivate = req.body.isPrivate;
    c.isDisabled = req.body.isDisabled;
    c.images = req.body.images;
    c.ratings = req.body.ratings;

      c.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'col updated!' });
      });
    });
  });

  app.delete('/api/privacy/collection/:_id', (req, res) => {
      Collection.remove({
          _id: req.params._id
      }, function(err, col) {
          if (err)
              res.send(err);

          res.json({ message: 'Successfully deleted' });
      });
  });



app.get('/api/privacy', (req, res) => {
  		Privacy.find(function(err, privacy) {
  			if (err)
  				res.send(err);
  			res.json(privacy);
  		});
  	});

app.put('/api/privacy/:privacy_id', (req, res) => {

    Privacy.findById(req.params.privacy_id, function(err, p) {

    p.description = req.body.description;  // set the name (comes from the request)

      p.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'privacy updated!' });
      });
    });
  });

//need id path for put/delete...
app.delete('/api/privacy', (req, res) => {
    Privacy.remove({
        _id: req.params._id
    }, function(err, priv) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});

app.get('/api/images', (req, res) => {
  //use nasa url here, res.send(data.body)//use the body to fill up the array
  		// Collection.find(function(err, collection) {
  		// 	if (err)
  		// 		res.send(err);
      //
  		// 	res.json(collection);
  		// });
  	});


};
