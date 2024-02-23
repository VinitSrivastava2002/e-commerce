import { Router } from "express";
import { User } from "../models/user.models.js";

const router = Router();

/* REGISTRATION */
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    // console.log(error);
    res.status(500).json(error);
  }
});

export default router;
