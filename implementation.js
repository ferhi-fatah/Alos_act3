const currencies = require('./currencies.json')
const data = require('./data.json')
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

// version 1 :
module.exports.accueil = function (apiVersion, req, res) {

  return res.json({ status: "success", message: "Welcome To cryptom Testing API Version : 1.0.0" });
}

module.exports.login = function (apiVersion, req, res) {

  const user = {
    id: 1,
    username: 'brad',
    email: 'brad@gmail.com'
  }
  return jwt.sign({ user }, 'secretkey', { expiresIn: '3000s' }, (err, token) => {
    res.json({
      token
    });
  });
}

module.exports.currencies_liste = function (apiVersion, req, res) {

  return res.status(200).json(currencies)

}
module.exports.currencies_liste_id = function (apiVersion, req, res) {

  const rank = parseInt(req.params.rank)
  const currencie = currencies.find(currencie => currencie.rank === rank)
  res.status(200).json(currencie)

}

module.exports.currencies_ajout = function (apiVersion, req, res) {
  body('symbol').isLength({ max: 4 }),
    body('symbol').isLength({ min: 2 }),
    body('id').isAlpha(),
    body('symbol').isAlpha(),
    body('name').isAlpha();
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      currencies.push(req.body)
      return res.status(200).json(currencies)
    }
  });
}



module.exports.currencies_modif = function (apiVersion, req, res) {
  const rank = parseInt(req.params.rank)
  let currencie = currencies.find(currencie => currencie.rank === rank)
  currencie.id = req.body.id,
    currencie.symbol = req.body.symbol,
    currencie.name = req.body.name,
    currencie.supply = req.body.supply,
    currencie.maxSupply = req.body.maxSupply,
    currencie.marketCapUsd = req.body.marketCapUsd,
    currencie.volumeUsd24Hr = req.body.volumeUsd24Hr,
    currencie.priceUsd = req.body.priceUsd,
    currencie.changePercent24Hr = req.body.changePercent24Hr,
    currencie.vwap24Hr = req.body.vwap24Hr,


    res.status(200).json(currencie)
}

module.exports.currencies_supr = function (apiVersion, req, res) {

  const rank = parseInt(req.params.rank)
  let currencie = currencies.find(currencie => currencie.rank === rank)
  currencies.splice(currencies.indexOf(currencie), 1)
  res.status(200).json(currencies)
}

module.exports.currencies_all = function (apiVersion, req, res, next) {

  res.status(404).json({
    status: 'fail ',
    message: `Can't find ${req.originalUrl} on this server! `
  });

  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
  err.statusCode = 404;

  next(err);
};
// version 2 :
module.exports.accueil_v2 = function (apiVersion, req, res) {

  return res.json({ status: "success", message: "Welcome To cryptom Testing API Version : 2.0.0" });

}


module.exports.data_liste = function (apiVersion, req, res) {

  return res.status(200).json(data)
}