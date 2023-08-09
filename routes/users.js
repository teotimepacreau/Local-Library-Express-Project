const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//exercice ajout de route
router.get('/cool/', (req, res, next)=>{
  res.send("You are so cool")
})

module.exports = router;
