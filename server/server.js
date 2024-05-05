  const express = require('express');
  const path = require('path');
  const app = express();
  const cors = require('cors');
  const PORT = process.env.PORT || 5000;
app.use(express.static('public'));
app.use(cors()); // This will enable CORS for all routes
  
  app.get('/cards', (req, res) => {
    res.send([{"imgUrl": "1","tokenName": "Joker", "ownerName": "Noah", "mintLeft": "300", "mintTotal": "1000", "cost": "2", "royalty": "10"},
    {"imgUrl": "2","tokenName": "Queen", "ownerName": "Mindi", "mintLeft": "300", "mintTotal": "1000", "cost": "2", "royalty": "10"},
    {"imgUrl": "3","tokenName": "King", "ownerName": "Byron", "mintLeft": "300", "mintTotal": "1000", "cost": "2", "royalty": "10"},
    {"imgUrl": "4","tokenName": "Ace", "ownerName": "Byron", "mintLeft": "300", "mintTotal": "1000", "cost": "2", "royalty": "10"},
    {"imgUrl": "1","tokenName": "Bishop", "ownerName": "Haotong", "mintLeft": "300", "mintTotal": "1000", "cost": "2", "royalty": "10"},
    {"imgUrl": "2","tokenName": "Knight", "ownerName": "Noah", "mintLeft": "300", "mintTotal": "1000", "cost": "2", "royalty": "10"},
    {"imgUrl": "3","tokenName": "Rook", "ownerName": "Noah", "mintLeft": "300", "mintTotal": "1000", "cost": "2", "royalty": "10"},
    {"imgUrl": "4","tokenName": "Pawn", "ownerName": "Jal", "mintLeft": "300", "mintTotal": "1000", "cost": "2", "royalty": "10"}
]);
  });

  app.get('/buy', (req, res) => {
    res.send({"data": "buying"})
  });

    app.get('/mint', (req, res) => {
    res.send({"data": "minting"})
  });
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });