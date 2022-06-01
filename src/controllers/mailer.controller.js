const mailerService = require('../services/mailer.service')
async function sendingBussinesInq(req,res,next) {
    try {
        const result = await mailerService.sendingBussinesInq(req);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    sendingBussinesInq
}