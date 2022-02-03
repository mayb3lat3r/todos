const express = require("express");
const User = require("./../models/User");
const bcryptjs = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });

    if (candidate) {
      return res
        .status(400)
        .json({ message: "Ошибка, пользователь уже существует" });
    }

    const hashPassword = await bcryptjs.hash(password, 8);

    const user = new User({ email, password: hashPassword });
    await user.save();

    return res.status(200).json({ message: "Пользователь создан успешно" });
  } catch (e) {
    console.error(e);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });

    if (!candidate)
      return res.status(404).json({
        message: `Пользователь с таким email (${email}) не существует`,
      });

    if (!bcryptjs.compareSync(password, candidate.password))
      return res.status(400).json({ message: "Неверный пароль" });

    const token = jwt.sign({ id: candidate.id }, config.get("jwtSecret"), {
      expiresIn: "1d",
    });

    return res.status(200).json({
      token,
      user: {
        id: candidate.id,
        email: candidate.email,
        avatar: candidate.avatar,
      },
    });
  } catch (e) {
    console.error(e);
    return res.status(400).json({ message: `Ошибка сервера`, error: e });
  }
});

module.exports = router;
