const express = require('express');
const bodyParser = require('body-parser');
// const {City} = require('./models/index.js');
const CityRepository = require('./repository/city-repository');

const { PORT } = require('./config/serverConfig');


const setupAndStartServer = (async () => {
   const app = express();

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));

   app.listen(PORT, async()=>{
    console.log(`Server running at ${PORT}`);
   //  console.log(City)
   
   const obj = new CityRepository();
   await obj.deleteCity(5);
   await obj.deleteCity(7);

   //  const obj = await City.create({
   //    name: "Lucknow2"
   //  })
   //  console.log(obj);
   //  // console.log(process.env);
   })
});

setupAndStartServer();