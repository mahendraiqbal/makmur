const fs = require("fs");
let rawData = fs.readFileSync("./dummy/data_news_indonesia.json", "utf8");
let splitData = rawData.split("\n");
let dataset = [];
splitData.forEach((element) => {
  let buildData = JSON.parse(element);
  dataset.push(buildData._source);
});

let data = JSON.stringify(dataset);
fs.writeFileSync("data_news_indonesia.json", data);
