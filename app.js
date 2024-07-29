const uWS = require('uWebSockets.js');

const port = 3000;

const app = uWS.App();

app.get('/', (res, req) => {
  res.end('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
