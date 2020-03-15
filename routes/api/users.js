const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route    POST api/users
// @desc     Sign up user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Please add your first name')
      .not()
      .isEmpty(),
    check('email', 'Please use a valid email').isEmail(),
    check('password', 'Please use 7 or more characters').isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    // If there are errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('User route');
  }
);

module.exports = router;
