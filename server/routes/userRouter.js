const userRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const SECRET = process.env.SECRET;

userRouter.get("/", async (req, res) => {
  const bearerToken = req.get("Authorization");
  console.log(bearerToken);

  if (!bearerToken)
    return res.status(400).json({ error: "must include token" });
  const token = (() => bearerToken.split(" ")[1])();

  try {
    const isValidToken = jwt.verify(token, SECRET);
    const foundUser = await User.findOne({ _id: isValidToken.id });
    return res.status(200).json({
      username: foundUser.username,
      expenses: foundUser.expenses,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: "Invalid Token",
    });
  }
});

userRouter.put("/", async (req, res) => {
  const bearerToken = req.get("Authorization");
  const { oldPassword, newPassword } = req.body;

  if (!bearerToken)
    return res.status(400).json({ error: "must include token" });

  const token = (() => bearerToken.split(" ")[1])();

  try {
    const isValidToken = jwt.verify(token, SECRET);
    const foundUser = await User.findOne({ _id: isValidToken.id });
    const isValid = await bcrypt.compare(oldPassword, foundUser.hashedPassword);

    if (!foundUser) return res.status(400).send({ error: "User not found" });
    if (!isValid) return res.status(400).send({ error: "Password is invalid" });

    const saltRounds = 10;

    const newHashedPassword = await bcrypt.hash(newPassword, saltRounds);
    foundUser.hashedPassword = newHashedPassword;
    await foundUser.save();
    return res.status(200).json(foundUser);
  } catch (e) {
    return res.status(400).send({
      error: "Invalid Token",
    });
  }
});

userRouter.post("/", async (req, res) => {
  const { username, password } = req.body;

  const foundUser = await User.findOne({ username });

  if (!foundUser)
    return res.status(404).send({ error: "Password or Username invalid" });
  const isValid = await bcrypt.compare(password, foundUser.hashedPassword);
  if (!isValid)
    return res.status(400).send({ error: "Password or Username invalid" });
  const token = jwt.sign(
    {
      username: foundUser.username,
      id: foundUser._id,
    },
    SECRET
  );

  return res.status(200).json({
    token,
    name: foundUser.name,
    username: foundUser.username,
  });
});

userRouter.delete("/", async (req, res) => {
  const bearerToken = req.get("Authorization");
  const { oldPassword } = req.body;

  if (!bearerToken)
    return res.status(400).json({ error: "must include token" });

  const token = (() => bearerToken.split(" ")[1])();

  try {
    const isValidToken = jwt.verify(token, SECRET);
    const foundUser = await User.findOne({ _id: isValidToken.id });
    const isValid = await bcrypt.compare(oldPassword, foundUser.hashedPassword);

    if (!foundUser) return res.status(400).send({ error: "User not found" });
    if (!isValid) return res.status(400).send({ error: "Password is invalid" });

    await User.deleteOne({ _id: foundUser.id });
    return res.status(200).json({
      message: "Succesfully deleted User",
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      error: "Invalid Token",
    });
  }
});

module.exports = userRouter;
