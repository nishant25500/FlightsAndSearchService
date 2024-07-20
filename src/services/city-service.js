const {CityRepository} = require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Smthng went wrong in service layer");
            throw error;
        }
    }

    async deleteCity(cityId){
        try {
            const res = await this.cityRepository.deleteCity(cityId);
            return res;
        } catch (error) {
            console.log("Smthng went wrong in service layer");
            throw error;
        }
    }

    async getCity(cityId){
        try {
            const res = await this.cityRepository.getCity(cityId);
            return res;
        } catch (error) {
            console.log("Smthng went wrong in service layer");
            throw error;
        }
    }

    async updateCity(cityId,data){
        try {
            const res = await this.cityRepository.updateCity(cityId,data);
            return res;
        } catch (error) {
            console.log("Smthng went wrong in service layer");
            throw error;
        }
    }

    async getAllCity(filter){
        try {
            const res = await this.cityRepository.getAllCity({name: filter.name});
            return res;
        } catch (error) {
            console.log("Smthng went wrong in service layer");
            throw error;
        }
    }
}
 
module.exports = CityService;