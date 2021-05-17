import User from "../models/User.js";

//get all users
const getUsers = async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (err) {
    res.send(404).json({ message: "error retrieving users" });
  }
};

//get one user
const getOneUser = async (req, res) => {
  try {
    const getOneUser = await User.findById(req.params.id);
    res.json(getOneUser);
  } catch (err) {
    res.send(404).json({ message: `error retrieving user with id ${req.params.id}` });
  }
};

//post new user:
const postUser = async (req, res) => {
  const user = new User({
    ...req.body,
  });

  try {
    const newUser = await user.save();
    res.json(newUser);
  } catch (err) {
    res.send(500).json({ message: "error saving user" });
  }
};

//modify:
const updateUser = async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json(updateUser);
  } catch (err) {
    res.send(500).json({ message: `error updating user with id ${req.params.id}` });
  }
};

//delete:
const deleteUser = async (req, res) => {
  try {
    const removeUser = await User.remove({ _id: req.params.id });
    res.json(removeUser);
  } catch (err) {
    res.send(404).json({ message: "error removing users" });
  }
};

export default {
  getUsers,
  getOneUser,
  postUser,
  updateUser,
  deleteUser,
};
