const router = require('express').Router();
const verify = require('./userAuthToken');

router.get('/', verify, (req, res) => {
  res.json({
    test: {
      title: 'Test data', 
      description: 'This is token testing'
    }});
});

module.exports = router;