const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const User = require('../models/user');
const authController = require('../controllers/auth');

router.post(
  '/signup',
  [
    body('name').trim().not().isEmpty(),
    body('email')
      .isEmail()
      .withMessage('Email inválido!')
      .custom(async (email) => {
        const user = await User.find(email);
        if (user[0].length > 0) {
          return Promise.reject('Email já está em uso!');
        }
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 7 }),
  ],
  authController.signup
);

router.post('/login', authController.login);

module.exports = router;
