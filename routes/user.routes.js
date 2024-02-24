import { Router } from "express";
import CryptoJS from "crypto-js";
import { User } from "../models/user.models.js";
import { verifyTokens, verifyTokenAndAuthorization } from "./verifyTokens.js";

const router = Router();

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SEC_KEY
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json("its a error");
  }
});

export default router;
