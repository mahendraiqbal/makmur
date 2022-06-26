const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: "http://localhost:9200",
});
const fs = require("fs");
const { resolve } = require("path");

let rawData = fs.readFileSync("./data_news_indonesia.json");
let dataset = JSON.parse(rawData);
console.log(dataset);
console.log("================================================");
// async function run() {
//   await client.indices.create(
//     {
//       index: "news_indonesia",
//       body: {
//         mappings: {
//           properties: {
//             judul: { type: "text" },
//             penulis: { type: "keyword" },
//             sumber_url: { type: "keyword" },
//             tgl_text: { type: "date" },
//             tgl_ambil: { type: "date" },
//             lokasi: { type: "keyword" },
//             konten: { type: "text" },
//             tld_domain: { type: "keyword" },
//             url_gambar: { type: "keyword" },
//             sentimen: { type: "keyword" },
//             entitas_khusus: { type: "object" },
//             geo_lokasi: { type: "object" },
//           },
//         },
//       },
//     },
//     { ignore: [400] }
//   );

//   const body = dataset.flatMap((doc) => [
//     { index: { _index: "news_indonesia" } },
//     doc,
//   ]);
//   console.log(body.length);
//   await client.bulk({ refresh: true, body });

//   const count = await client.count({ index: "news_indonesia" });
//   console.log(count);
// }

const promise = new Promise(function (resolve, reject) {
  const string1 = dataset;
  if (string1) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Promise resolved successfully");
  })
  .catch(function () {
    console.log("Promise is rejected");
  });

// run().catch(console.log);
