const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const { nanoid } = require('nanoid');

// POST /shorten
router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const shortCode = nanoid(6);

  const newUrl = new Url({ originalUrl, shortCode });
  await newUrl.save();

  res.json({ shortUrl: `http://localhost:3000/${shortCode}` });
});

// GET /:code
router.get('/:code', async (req, res) => {
  const { code } = req.params;
  const urlDoc = await Url.findOne({ shortCode: code });

  if (urlDoc) {
    res.redirect(urlDoc.originalUrl);
  } else {
    res.status(404).json({ error: 'URL not found' });
  }
});

module.exports = router;