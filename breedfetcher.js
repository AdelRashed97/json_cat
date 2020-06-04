const request = require('request');
const breedName =  process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // Print the HTML for the Google homepage.

  if (error) {
    console.log("Error: ",error);

  } else {
    
    const data = JSON.parse(body);
    //console.log(typeof)
    if (data.length === 0) {
      console.log("Error: requested breed is not found");
    } else {
      
      console.log(data[0].description);
      
    }
  }
});
    
    
    