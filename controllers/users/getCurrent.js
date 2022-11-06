const getCurrent = async (req, res) => {
  const { name } = req.user;

  res.json({ name });
};

module.exports = getCurrent;
