export const checkATS = async (req, res) => {
  const { resumeText } = req.body;

  // Later: integrate OpenAI / Claude

  const fakeScore = Math.floor(Math.random() * 100);

  res.json({
    score: fakeScore,
    suggestions: ["Add keywords", "Improve formatting"]
  });
};