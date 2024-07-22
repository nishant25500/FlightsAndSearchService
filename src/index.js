const express = require("express");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/index");

const { PORT } = require("./config/serverConfig");
const { City, Airport,Airplane } = require("./models/index");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server running at ${PORT}`);

    // console.log(process.env);
 
   //  const airport = await Airport.findAll({
   //    include: [{ model: City}],
   //  });
   // console.log(airport);

   //  const city = await City.findOne({
   //    where: { id: 1},
   //  })
   //  const airports = await city.getAirports();
   //  airports.forEach(element => {
   //    console.log(element.name)
   //  });

   //  console.log(airports);

  //  await Airport.truncate();
  });
};

setupAndStartServer();
