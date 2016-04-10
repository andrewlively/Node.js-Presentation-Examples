const router = require(`express`).Router();
const User = require(`../../libs/User`);

router.get(`/`, (req, res) => {
  res.render(`login`);
});

router.post(`/login`, async (req, res) => {
  try {
    const user = await User.login(req.body.email, req.body.password);

    console.log(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
