const Users = require("../../../schemas/Users");

const saveUserDataInDB = async (req, res) => {
  try {
    const email = req.params.email;
    const user = req.body;
    const query = { email: email };
    const option = { upsert: true };
    const doesExist = await Users.findOne(query);
    if (doesExist) {
      return res.send(doesExist);
    }
    const result = await Users.updateOne(
      query,
      {
        $set: { ...user, timeStamp: Date.now() },
      },
      option
    );
    return res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = saveUserDataInDB;
