const config = require(`../config.json`);
const express = require(`express`);
const app = express();

app.use(express.static(`../public`));
app.set(`view engine`, `ejs`);
app.set(`views`, `${ __dirname }/../views`);

app.use(`/`, require(`./routes/Index`));

app.listen(config.port);
console.log(`App listening on port ${ config.port }`);
