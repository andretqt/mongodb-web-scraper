// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var request = require("request");
request("https://www.theguardian.com/international", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  var $ = cheerio.load(html);
  // An empty array to save the data that we'll scrape
  var results = [];

  $("a.pillar-link").each(function(i, element) {
    var href = $(element).attr("href");
    var text = $(element).text()
    results.push({
      link: href,
      text: text
    })
  });
  console.log(results);
});

