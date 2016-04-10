const router = require(`express`).Router();

router.get(`/`, (req, res) => {
  res.render(`login`);
});

router.post(`/login`, (req, res) => {
  
});

module.exports = router;
