const app = require('express')()

app.get('/', (req, res) => {

  var diagdata = [{
    "nextServiceDue" : {
      "date" : "15 May 2020",
      "KM" : "38400"
    }, 
    "vehicleHealth" : {
      "brakePad" : "GOOD",
      "oilLevel" : "MEDIUM",
  
     },
     "customerInfo" : {
       "name" : "Srihari",
       "vehicleNumber" : "KA04AA1234"
     }
  }];
  // Return diagnostics data
  res.send(JSON.stringify(diagdata));
});
 
module.exports.app = app;
