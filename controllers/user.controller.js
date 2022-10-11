const { v4: uuidv4 } = require('uuid')
const User = require('../models/user.model')
// ***********************
//get all user
// **********************
getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find()
    res.status(200).json({ message: allUsers })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
// ***********************
//get one user
// **********************
GetOneUser = async (req, res) => {
  try {
    const singleUser = await User.findOne({ id: req.params.id })
    res.status(200).json({ message: singleUser })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
// ***********************
//create user
// **********************
CreateUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      age: Number(req.body.age),
    })
    await newUser.save()
    res.status(201).json({ message: newUser })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
// ***********************
//update user
// **********************
UpdateUser = async (req, res) => {
  try {
    const updateUser = await User.findOne({ id: req.params.id })
    updateUser.name = req.body.name
    updateUser.email = req.body.email
    updateUser.age = Number(req.body.age)
    await updateUser.save()
    res.status(200).json({ message: 'user is updated' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
// ***********************
//delete user
// **********************
DeleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id })
    res.status(200).json({ message: 'user is deleted' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = { getAllUser, GetOneUser, CreateUser, UpdateUser, DeleteUser }
