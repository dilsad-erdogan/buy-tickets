const Ticket = require('../models/Ticket');

async function addTicket(req, res) {
    try{
        const { user_id, vehicle_name, date_time } = req.body;

        const ticket = new Ticket({
            user_id: user_id,
            vehicle_name: vehicle_name,
            date_time: date_time
        });

        const savedTicket = await ticket.save();
        if(savedTicket) {
            res.status(201).json({ success: true, data: savedTicket});
        } else {
            res.status(400).json({ success: false, message: 'Ticket error!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
};

module.exports = {
    addTicket
};