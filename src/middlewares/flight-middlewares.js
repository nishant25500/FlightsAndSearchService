const validateCreateFlight = async (req,res,next) =>{
   if(!req.body.flightNumber ||
      !req.body.airplaneId ||
      !req.body.departureAirportId ||
      !req.body.arrivalAirportId ||
      !req.body.arrivalTime ||
      !req.body.departureTime ||
      !req.body.price
   ){
    //if any the above params missing then we come inside this
    return res.status(400).json({
        data: {},
        message: 'Invalid request body for create flight',
        success: false,
        err: 'Missing mandatory properties to create flight'
    })
   }

   next();
}

module.exports = {
    validateCreateFlight
}