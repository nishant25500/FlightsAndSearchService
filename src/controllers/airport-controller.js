const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req,res)=>{
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Suucessfully created a airport",
            err: {},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to create airport",
            err: error,
            success: false
        })
    }
}

module.exports = {
    create,
}