const User = require('../models/User.js');

module.exports = {
    async getUsers(req, res) {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userId })
          .select('-__v');
  
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async createUser(req, res) {
      try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async updateUser(req, res) {

    },
    async deleteUser(req, res) {

    },
  };
  
  //maybe just have this in user idk

/* /api/users/:userId/friends/:friendId

POST to add a new friend to a user's friend list

DELETE to remove a friend from a user's friend list
*/