const {sendingEmail : transporter} = require('../middlewares/mailer');

async function sendingBussinesInq(req) {
    const {fullname,bussinessName,description,phone,email} = req.body;

    const createdMessageForOurCompany = `
Hello ${fullname} from ${bussinessName} want to talk about bussiness
This is it's message : 

${description}

This is it's contact :  
phone : ${phone}
email : ${email}`
    const createdMessageForClients = `Thanks for your interest with our company - Please wait for our company to process your inquires in max two days`;
    
    const dataToBeSentForOurCompany = {
        receiver : process.env.USER_EMAIL_TEST,
        messageToBeSent : createdMessageForOurCompany,
        subject : `BUSSINES TALKS WITH - ${bussinessName},`
    }
    const dataToBeSentForClient = {
        receiver : email,
        messageToBeSent : createdMessageForClients,
        subject : `Thank You From Rizky Company`
    };
    await transporter(dataToBeSentForOurCompany);
    await transporter(dataToBeSentForClient);

    return 'Success'
}

module.exports = {
    sendingBussinesInq
}