import { Router } from "express";
import { User } from "../models/user.models.js";
import CryptoJS from "crypto-js";

const router = Router();

/* REGISTER */
const secretkey = "superSecretKey";

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SEC_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    // console.log(error);
    res.status(500).json(error);
  }
});

/* LOGIN */

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(401).json("Wrong email");
    }

    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SEC_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (decryptedPassword !== req.body.password) {
      return res.status(401).json("Wrong password");
    }
    const { password, ...others } = user._doc;

    // Password match, return user data
    res.status(200).json(others);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json("Internal server error");
  }
});

export default router;
