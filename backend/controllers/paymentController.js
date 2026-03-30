import User from "../models/user.js";

export const addCredits = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.credits.atsRemaining += 25;
  user.credits.downloadsRemaining += 1;

  await user.save();

  res.json({ msg: "Credits added" });
};