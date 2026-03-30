import User from "../models/user.js";

export const checkDownload = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (user.credits.downloadsRemaining > 0) {
    user.credits.downloadsRemaining--;
    await user.save();
    return next();
  }

  return res.status(403).json({
    msg: "Download limit reached"
  });
};