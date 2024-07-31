const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  // put
  // delete
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// put 

// delete

module.exports = router;
