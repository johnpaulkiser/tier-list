const express = require('express');
const app = express();
//const cors = require('cors');
const port = 3000;



//app.use(cors);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method ==='OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});


app.post('/api/login', (req, res) => {
  console.log(req);
  res.json({key: 'this is a key'});
});

app.get('/api/get', (req, res) => {
  res.json({hey: 'world'});
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
