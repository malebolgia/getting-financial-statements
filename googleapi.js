var google = require("google-finance-data");
 
google.getSymbol("cue")
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(err => console.error(err.stack ? err.stack : err));