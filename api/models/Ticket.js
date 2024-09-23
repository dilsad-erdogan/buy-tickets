const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    vehicle_name: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    date_time: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;