const server = require("./server");

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
server.listen(port, () =>
  console.log(`Server up and running on port ${port} !`)
);
