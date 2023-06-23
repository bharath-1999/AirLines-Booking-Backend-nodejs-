const { CityRepository } = require('../respositories/index')

class CityService {
    constructor() {
        this.CityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.CityRepository.createCity(data)
            return city;
        } catch (error) {
            throw { error }
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.CityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log(error);
            throw { error }
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            throw { error }
        }
    }

    async updateCity(cityid,data) {
        try {
            const city = await this.CityRepository.updateCity(cityid,data);
            return city;
        } catch (error) {
            throw { error }
        }
    }
    async getAllCities(filter) {
        try {
            const cities = await this.CityRepository.getAllCities({ name: filter.name});
            return cities;
        } catch (error) {
            console.log("something wrong");
           throw { error }
        }
    }
}




module.exports = CityService;