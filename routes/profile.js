const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/:platform/:gamertag', async (req,res) => {
  try {
    const headers = {
      'TRN-Api-Key': process.env.TRACKER_API_KEY
    };

    const {platform, gamertag} = req.params;
    const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`, {
      headers
    });

    const data = await response.json();

    //If no profile is found for the entered gamertag return status not found to the user
    if(data.errors && data.errors.length > 0) {
      return res.status(404).json({
        message: 'Profile not found'
      });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: 'Servor error'
    });
  }
});

module.exports = router;

