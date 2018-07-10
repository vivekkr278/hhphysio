var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Appointment = new Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String
    },
    phoneNo:{
        type: String
    },
    appointmentDate:{
        type: String
    },
    appointmentTime:{
        type: String
    },
    message:{
        type: String
    },
    approved:{
        type:Boolean
    },
    rescheduled:{
        type:Boolean
    },
    rescheduledDate:{
        type: String
    },
    rescheduledTime:{
        type: String
    }
},{
    collection: 'appointment'
});

module.exports = mongoose.model('Appointment', Appointment);