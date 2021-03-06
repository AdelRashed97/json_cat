const request = require('request');
//const breedName =  process.argv.slice(2);


const fetchBreedDescription = function(breedName,callback) {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => {
    
    if (error) {
      callback(error,null);
  
    } else {
      
      const data = JSON.parse(body);
      //console.log(typeof)
      if (data.length === 0) {
        callback("Requested breed is not found",null);
      } else {
        
        callback(null,data[0].description);
        
      }
    }
  });
};

module.exports = {fetchBreedDescription};

    
    
    