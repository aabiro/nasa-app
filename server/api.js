// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */
const Collection = require('./models/collection');
const Image = require('./models/image');

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

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

/*
 |--------------------------------------
 | API Routes
 |--------------------------------------
 */

  // GET API root
  // app.get('/api/', (req, res) => {
  //   res.send('API works');
  // });

app.get('/api/collections', (req, res) => {
  		Collection.find(function(err, collection) {
  			if (err)
  				res.send(err);

  			res.json(collection);
  		});
  	});

 // GET list of public events starting in the future
 // app.get('/api/collections', (req, res) => {
 //   Collection.find() (err, result) => {
 //     let collectionsArr = [];
 //      if (err) {
 //        return res.status(500).send({message: err.message});
 //      }
 //      if (result) {
 //        result.forEach(collection => {
 //          collectionsArr.push(collection);
 //        });
 //      }
 //      res.send(collectionsArr);
 //    });
 //  });


};
