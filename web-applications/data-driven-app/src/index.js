require(`babel-polyfill`);

const config = require(`../config.json`);
const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const session = require(`express-session`);
const uuid = require(`node-uuid`);

app.set(`view engine`, `ejs`);
app.set(`views`, `${ __dirname }/../views`);
app.use(express.static(`${ __dirname }/../public`));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(session({
  genid: () => { return uuid.v4(); },
  secret: config.sessionSecret,
  resave: true,
  saveUninitialized: true
}))

app.use(`/`, require(`./routes/Index`));

app.listen(config.port);
console.log(`App listening on port ${ config.port }`);
