const express = require("express");
const router = express.Router();
const Url = require("./url");

// POST /api/url/shorten
router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: "Please provide a valid URL" });
  }

  try {
    // Generate short code
    const shortCode = Math.random().toString(36).substring(2, 8);

    // Full short URL
    const shortUrl = `${req.protocol}://${req.get("host")}/${shortCode}`;

    // Save in DB
    const url = new Url({
      longUrl,
      shortUrl,
      code: shortCode,
    });

    await url.save();

    // 👉 Send back shortUrl
    res.json({ shortUrl: url.shortUrl });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// @route   GET /:code
// @desc    Redirect to original URL
router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ code: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json({ error: "URL not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
