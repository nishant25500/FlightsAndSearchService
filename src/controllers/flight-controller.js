const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req,res)=>{
    try {
        const response = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: response,
            message: "Flights created successfully",
            err: {},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to create flight",
            err: error,
            success: false
           })
    }
}

module.exports = {
    create
}