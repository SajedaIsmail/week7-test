const express = require("express");
const {get,add} = require("./user");
const router = express.Router();
 router.get('/cities',get);
 router.post('/add-city',add);

module.exports = router;
