const router = require(`express`).Router();
const User = require(`../../libs/User`);

router.get(`/`, (req, res) => {
  if (req.session.user) {
    return res.render(`dashboard`);
  }

  res.redirect(`/login`);
});

router.get(`/login`, (req, res) => {
  res.render(`login`);
});

router.post(`/login`, async (req, res) => {
  try {
    const user = await User.login(req.body.email, req.body.password);

    req.session.user = user;

    res.redirect(`/`);
  } catch (err) {
    res.redirect(`/`);
  }
});

router.get(`/logout`, (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return console.log(err);
    }

    res.redirect(`/`);
  });
});

module.exports = router;
