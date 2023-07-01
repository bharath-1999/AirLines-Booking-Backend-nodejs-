const { FlightsRepository, AirplaneRepository } = require('../respositories/index')


class FlightsService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightsRepository = new FlightsRepository();
    }
    async createFlight(data) {
        try {
             const airplane = await this.airplaneRepository.getAirplane(data.airplaneid);
             const flight = await this.flightsRepository.createFlight({
                ...data, totalSeats:airplane.capacity
             })
             return flight;
        } catch (error) {
            console.log("something wring in service layer");
            throw { error };
        }
    }

    async getFlight(fligthId) {
        try {
            
            const flight = this.flightsRepository.getFlight(fligthId);
        } catch (error) {
            
        }
    }

    async getAllFlightData(data) {
        try {
            
            const flights = this.flightsRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw { error };
        }
    }
}

module.exports = FlightsService;