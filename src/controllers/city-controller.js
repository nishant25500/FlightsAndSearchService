const {CityService} = require('../services/index');

const cityService = new CityService();

const create = (async (req,res)=>{  //POST, data-> req.body
    console.log(req.body);
    console.log("Nishant");
    try {
        const response = await cityService.createCity(req.body);
        return res.status(201).json({
         data: response,
         message: "City created successfully",
         err: {},
         success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to create city",
            err: error,
            success: false
           })
    }
})


const destroy = (async (req,res)=>{ //DELETE -> /city/:id  id->req.params.id
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
         data: response,
         message: "Successfully deleted",
         err: {},
         success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to delete",
            err: error,
            success: false
           })
    }
})


const get = (async (req,res)=>{ // GET -> city/:id  
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
         data: response,
         message: "Successfully fetched a city",
         err: {},
         success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to fetch a city",
            err: error,
            success: false
           })
    }
})

const update = (async (req,res)=>{  //PATCH -> city/:id  data->req.body
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
         data: response,
         message: "Successfully updated a city",
         err: {},
         success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to update a city",
            err: error,
            success: false
           })
    }
})

module.exports = {
    create,
    destroy,
    get,
    update
}