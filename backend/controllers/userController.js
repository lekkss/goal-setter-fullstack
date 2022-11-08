// @desc Register new user
// @route POST /api/users
// @access Public

const registerUser = (req, res) => {
  res.json({ message: "Register user" });
};

// @desc Login user
// @route POST /api/users/login
// @access Public

const loginUser = (req, res) => {
  res.json({ message: "Login user" });
};

// @desc Get user data
// @route GET /api/users/me
// @access Private

const getUser = (req, res) => {
  res.json({ message: "Get user" });
};

module.exports = { registerUser, loginUser, getUser };
