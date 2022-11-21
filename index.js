const unirest = require("unirest");
const cheerio = require("cheerio");

const getFinanceData = async () => {
  const url = "https://www.google.com/finance/quote/CUE:NASDAQ";

  const response = await unirest.get(url).header({
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
  });

  const ajov = cheerio.load(response.body);

  let finstat = [];
  ajov(".gyFHrc").each((i, el) => {
    finstat.push({
      name: ajov(el)
        .find("span")
        .text()
        .toLowerCase()
        .replace(/ /g, "_")
        .replace(/[^\w-]+/g, ""),
      text: ajov(el).find(".P6K39c").text(),
    });
  });
  console.log(finstat);
};

getFinanceData();
console.log("done");
