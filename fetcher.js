// node fetcher.js http://www.example.edu/ ./index.html
let args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
request(args[0], function (error, response, body) {
  fs.writeFile(args[1], body, () => {console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
})

  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});

