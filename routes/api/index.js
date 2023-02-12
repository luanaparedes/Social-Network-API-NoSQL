const router = require('express').Router();
const userRoutes = require('./usersAPI');
const thoughtRoutes = require('./thoughtsAPI');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;