const {FlightRepository,AirplaneRepository} = require('../repository/index')
const {compareTime} = require('../utils/helper');

class FlightService{
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
       try {
          if(!compareTime(data.arrivalTime,data.departureTime)){
            throw {error: 'Arrival time cannot be less than departure!'}
          }
          const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
          const flight = await this.flightRepository.createFlight({
            ...data, totalSeats: airplane.capacity
          });
          return flight;
       } catch (error) {
        console.log("Smthng went wrong in service layer")
        throw(error)
       } 
    }

    async getFlight(data){
      try {
        const flight = await this.flightRepository.getFlight(data.id);
        return flight;
      } catch (error) {
        console.log("Smthng went wrong in service layer")
        throw(error)
      }
    }

    async getAllFlight(data){
      try {
        const flight = await this.flightRepository.getAllFlights(data);
        return flight;
      } catch (error) {
        console.log("Smthng went wrong in service layer")
        throw(error)
      }
    }
}

module.exports = FlightService;