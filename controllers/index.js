const router = require('express').Router();
const apiRoutes = require('./api.js');
const htmlRoutes = require('./views.js');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

// router.post("/api/burgers/create", (req, res) => {
//     console.log('fuck you')
// });

module.exports = router;