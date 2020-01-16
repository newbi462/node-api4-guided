const server = require('./api/server.js');

const port = process.env.PORT || 4000 // fix to let Huroku use dynamic port
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

//ALSO ADDED "start" to pac JSON
