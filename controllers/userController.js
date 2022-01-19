const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
      User.find()
      .select('-__v')
        .then(async (users) => {
          return res.json(users);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Get a single user
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('friends')
        .populate('thoughts')
        .then(async (user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json({
                user,
              })
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Create a new user
    createUser(req, res) {
      User.create(req.body)
        .then(user => res.json(this.getSingleUser))
        .catch((err) => res.status(500).json(err));
    },
    // Delete a user and remove them from the course
    deleteUser(req, res) {
      User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No such user exists.' })
            // Remove associated thoughts with user
            : Thought.deleteMany({ userId: req.params.userId })
            .then((thought)=>
            !thought
            ? res.status(404).json({ message: "No thought with that ID" })
            : res.json({ message: 'User successfully deleted' })
        )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        }));
    },
    
    updateUser(req, res) {
      User.findOneAndUpdate({
        _id: req.params.userId,
      },
      {
        $set: req.body, 
      },
      {
        runValidators: true,
        new: true,
      },
      )
      .then((user) =>
      !user
        ? res.status(404).json({ message: 'No such user exists.' })
        : res.json({ message: 'User successfully updated.' })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
    },
    // Add a friend for a user
    addFriend(req, res) {
      console.log('You are adding a friend');
      console.log(req.body);
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Remove friend from user
    removeFriend(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
  };
  