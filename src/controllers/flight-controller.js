const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req,res)=>{
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const response = await flightService.createFlight(flightRequestData);
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

const get = async (req,res)=>{
    try {
        const response = await flightService.getFlight(req.params.id)
        return res.status(200).json({
            data: response,
            message: "Successful fetched the flight",
            err: {},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to get flight",
            err: error,
            success: false
           })
    }
}
const getAll = async (req,res)=>{
    try {
        const response = await flightService.getAllFlight(req.query)
        return res.status(200).json({
            data: response,
            message: "Successful fetched the flights",
            err: {},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to get flight",
            err: error,
            success: false
           })
    }
}



module.exports = {
    create,
    get,
    getAll
}