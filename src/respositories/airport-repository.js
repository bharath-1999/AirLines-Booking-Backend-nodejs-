const CrudRepository = require('./crud-repository');
const {Airport} = require('../models/index');
class AirportRepository extends CrudRepository {
    constructor() {
        console.log('aaaaaaaaaaaaaa:',Airport)
        super(Airport);
    }
}

module.exports = AirportRepository;