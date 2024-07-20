const express = require('express');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index')

const { PORT } = require('./config/serverConfig');


const setupAndStartServer = (async () => {
   const app = express();

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));

   app.use('/api',ApiRoutes);

   app.listen(PORT, async()=>{
    console.log(`Server running at ${PORT}`);

     // console.log(process.env);
   })
});

setupAndStartServer();