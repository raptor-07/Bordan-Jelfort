function addUserSubscriptions(req, res) {
  try {

  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
    return;
  }
}

module.exports = {
  addUserSubscriptions,
};
