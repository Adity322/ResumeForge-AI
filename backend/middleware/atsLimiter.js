import User from "../models/user.js";

export const checkATSAccess = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  // Free usage
  if (user.atsUsedFree < 4) {
    user.atsUsedFree++;
    await user.save();
    return next();
  }

  // Paid usage
  if (user.credits.atsRemaining > 0) {
    user.credits.atsRemaining--;
    await user.save();
    return next();
  }

  return res.status(403).json({
    msg: "ATS limit reached. Please purchase plan."
  });
};