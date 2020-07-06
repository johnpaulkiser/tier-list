const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const app = express();

const port = 3000;

const secret = 'adfwefkj234kjwdfj9j23lq9cja32mlas9df';

let users = [
  {
    email: 'johnpaulkiser@gmail.com',
    password: 'password'
  }
];


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

app.use(bodyParser.json());


app.post('/api/login', (req, res) => {
  console.log(req.body.user);

  if(users.filter(user => _.isEqual(user, req.body.user)).length == 1)
    console.log("user exists");
  
  res.json({key: 'this is a key'});
});


app.post('/api/register', (req, res) => {
  // check if passwords match
  if (req.body.password !== req.body.confirmedPassword)
    return res.json({ error: 'password mismatch'});

  const newUser = {
    email: req.body.user.email,
    password: req.body.user.password
  };

  // check if user already exists
  if(users.filter(user => _.isEqual(user, newUser)).length === 1)
    return res.json({ error: 'email already in use'});
  else
    users.push({
      email: req.body.user.email
    });
    //log in user -> TODO: send jwt tokens.
  
  res.json({key: 'this is a key'});
});

app.listen(port, () => console.log(`Development API runninge at http://localhost:${port}`));
