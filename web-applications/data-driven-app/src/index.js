const config = require(`../config.json`);
const express = require(`express`);
const app = express();

app.set(`view engine`, `ejs`);
app.set(`views`, `${ __dirname }/../views`);
app.use(express.static(`${ __dirname }/../public`));

app.use(`/`, require(`./routes/Index`));

app.listen(config.port);
console.log(`App listening on port ${ config.port }`);
