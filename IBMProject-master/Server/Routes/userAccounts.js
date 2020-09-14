const router = require('express').Router();
const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');
const {validateUserRegister, validateUserLogin} = require('../validation');
const bcrypt = require('bcryptjs');

//Register new user
router.post('/register', async (req, res) => {
  
  //uuden käyttäjän loggaus
  console.log(req.body);

  const {error} = validateUserRegister(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  
  const emailExist = await UserModel.findOne({email: req.body.email});
  if(emailExist) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new UserModel({
    username: req.body.username,
    password: hashPassword,
    email: req.body.email,
  });

  try {
    const savedUser = await user.save();
    res.send({id: savedUser._id});
  }catch (err) {
    res.status(400).send(err)
  }
});

//Login
router.post('/login', async (req, res) => {

  const {error} = validateUserLogin(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  
  const user = await UserModel.findOne({username: req.body.username});
  if(!user) return res.status(400).send("username not found");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send("Invalid password");

  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
  //res.header('auth-token', token).send(token);
  res.send({token: token});
});

module.exports = router;