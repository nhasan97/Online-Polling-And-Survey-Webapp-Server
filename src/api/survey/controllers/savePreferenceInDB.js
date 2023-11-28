const Preferences = require("../../../schemas/Preference");

const savePreferenceInDB = async (req, res) => {
  try {
    const preference = req.body;
    const result = await Preferences.create(preference);
    return res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = savePreferenceInDB;
