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
            throw { error }
        }
    }

    async getCity() {
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
        } catch (error) {
            throw { error }
        }
    }
}




module.exports = CityService;