const { StringStream } = require("scramjet");
const request = require("request");

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
request
  .get(
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=CUE&interval=15min&slice=year1month1&apikey=YOUR_API_KEY"
  )
  .pipe(new StringStream())
  .CSVParse()
  .consume((object) => console.log("Row:", object))
  .then(() => console.log("success"));
