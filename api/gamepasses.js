export default async function handler(req, res) {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ error: "Missing userId" });

  try {
    const response = await fetch(`https://games.roblox.com/v2/users/${userId}/game-passes?limit=10`);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
}
