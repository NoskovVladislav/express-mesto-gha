const router = require('express').Router();
const userRoute = require('./users');
const cardsRoute = require('./cards');

router.use('/users', userRoute);
router.use('/cards', cardsRoute);

module.exports = router;
