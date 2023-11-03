const dotenv = require('dotenv');
const authApiProxy = require('./proxies/authenticateapi');
const provision = require('./provision');

//Used for the express HTTP listener
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

dotenv.config();
const filename = process.argv[2];

const response = authApiProxy.authenticate(
                          process.env.GENESYS_CLIENT_ID, 
                          process.env.GENESYS_CLIENT_SECRET,
                          process.env.GENESYS_ORG_REGION);

console.log(`token: ${JSON.stringify(response, null, 4)}`)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  Object.keys(req.body).forEach((prop)=> console.log(prop));
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.role);
  console.log(req.body.sitename);
  console.log(req.body.phonebase);
  console.log(req.body.division);
  await provision.createUsersService(req.body);
  res.statusCode = 202;
  res.send({ status: 'Accepted' });
});

app.listen(port, () => {
  console.log(`User provisioning listening at http://localhost:${port}`);
});

