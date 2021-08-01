const express = require('express');
const { 
    getGroups,
    getGroup,
    createGroup
} = require('../controllers/groups');

const router = express.Router();

router.route('/').get(getGroups).post(createGroup);

router
  .route('/:id')
  .get(getGroup);

  


module.exports = router;
