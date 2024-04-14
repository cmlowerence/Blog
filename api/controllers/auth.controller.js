import User from "../modules/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    // return res.status(400).json({ message: "All fields are required" });
    next(errorHandler(400, 'All fields are required'));
  }
  const hashPwd = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashPwd
  });

  try {
    await newUser.save();
    res.json("Signup Successful");
  } catch (err) {
    next(err);
  }
};
