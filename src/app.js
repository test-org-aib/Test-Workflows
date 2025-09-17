const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send(`
    <h1 style="font-size: 72x; font-weight: bold; color: white; background-color: blue;">
      Welcome to the Root URL of this Server!
    </h1>
  `);
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Successfully Running, and App is listening on port " + PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
