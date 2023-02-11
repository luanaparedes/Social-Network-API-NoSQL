const router = require('express').Router();
const apiRoutes = require('./api');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/api', apiRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;