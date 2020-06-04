const request = require('request');
//const breedName =  process.argv.slice(2);


const fetchBreedDescription = function(breedName,callback) {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // Print the HTML for the Google homepage.
  
    if (error) {
      callback(error,null);
  
    } else {
      
      const data = JSON.parse(body);
      //console.log(typeof)
      if (data.length === 0) {
        callback(null,"Error: requested breed is not found");
      } else {
        
        callback(null,data[0].description);
        
      }
    }
  });
};

module.exports = {fetchBreedDescription};

    
    
    