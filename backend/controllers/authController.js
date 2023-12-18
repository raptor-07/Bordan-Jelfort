const Subscriber = require('../models/subscriber');

async function addUserSubscriptions(req, res) {
  try {
    const { email, urls } = req.body;

    const isExistingSubscriber = await Subscriber.findOne({ email });

    if (isExistingSubscriber) {
      res.status(400).send("User already exists");
      return;
    }

    const subscriber = new Subscriber({ email, urls });

    await subscriber.save();

    res.status(200).send("User created");

  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
    return;
  }
}

module.exports = {
  addUserSubscriptions,
};