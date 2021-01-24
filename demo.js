const request = require("request-promise");
const cheerio = require("cheerio");
let choose = process.argv[2];
option = {
    uri: "https://codequiz.azurewebsites.net/",
    headers:{
        "Cookie": "hasCookie=true"
    }
};
async function main() {
 const result = await request(option);
 const $ = cheerio.load(result);
 let navData = {};
 $("body > table > tbody > tr").each((index, element) => {
     navData[`${$($(element).find("td")[0]).text()}`.trim()] = $($(element).find("td")[1]).text();
 });
 console.log(navData[choose]);
}
 
main();