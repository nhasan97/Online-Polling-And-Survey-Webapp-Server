const Comments = require("../../../../schemas/comments");

const saveCommentInDB = async (req, res) => {
  try {
    const comment = req.body;
    const result = await Comments.create(comment);
    return res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = saveCommentInDB;
