const { FlightsService } =  require('../services/index');
const { SuccessCodes } = require('../utils/error-codes')

const flightService = new FlightsService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create a flight',
            error: {}
        })
    }
}

const getAll = async (req,res) =>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched all flights'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to ftech the flights',
            error: {}
        })
    }

}
module.exports = {
    create,
    getAll
}