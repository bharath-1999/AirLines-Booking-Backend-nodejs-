const { Flights } = require('../models/index')
const { Op } = require('sequelize');
class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportid){
            filter.departureAirportid = data.departureAirportid;
        }
        if(data.minPrice&&data.maxPrice){
            Object.assign(filter,{
                [Op.and]: [
                {price:{[Op.gte]: data.minPrice}},
                {price:{[Op.lte]: data.maxPrice}}
                ]
          }  )
        }
        if(data.minPrice) {
            Object.assign(filter, {price:{[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice) {
            Object.assign(filter, {price:{[Op.lte]: data.maxPrice}});
        }

        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something happend in flight repo");
            throw {error}
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something happend in flight repo");
            throw {error}
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            console.log(filterObject);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("something happend in flight repo");
            throw {error}
        }
    }
}

module.exports = FlightRepository;