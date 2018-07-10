var express = require('express');
var app = express();
var patientRouter = express.Router();
var email 	= require('emailjs');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
    // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     auth: {
    //         user: "vivek.kr278@gmail.com", // generated ethereal user
    //         pass: "vi@kr286545" // generated ethereal password
    //     }
    // });

    // let transporter = nodemailer.createTransport({
    //     pool: true,
    //     host: 'smtp.gmail.com', // Gmail as mail client
    //     port: 465,
    //     secure: true, // use SSL
    //     auth: {
    //         user: 'vivek.kr278@gmail.com', // generated ethereal user
    //         pass: 'vi@kr286545' // generated ethereal password
    //     }
    // });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'vinayakpassion123@gmail.com', // sender address
        to: 'vivek.kr278@gmail.com', // list of receivers
        subject: 'Testing mail', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);
    //     // Preview only available when sending through an Ethereal account
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // });
// var server 	= email.server.connect({
//     user:"vivek.kr278@gmail.com",
//     password:"8793fb36-63de-4af3-befc-cc117895d15a",
//     host:"smtp.elasticemail.com",
//     port:25
// });
// Require Item models in our routes module
var Patient = require('../models/patientModel');
var Appointment = require('../models/appointmentModel');

// Defined store route
patientRouter.route('/add/post').post(function (req, res) {
    var item = new Patient(req.body);
    item.save()
        .then(item => {
        res.status(200).json({Patient: 'Patient added successfully'});
})
.catch(err => {
        res.status(400).send("unable to save to database");
});
});

// Defined store route
patientRouter.route('/book').post(function (req, res) {
     var item = new Appointment(req.body);
    item.save()
        .then(item => {
        res.status(200).json({Appointment: 'Patient booked successfully'});
         // send mail with defined transport object
        //  transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         return console.log(error);
        //     }
        //     console.log('Message sent: %s', info.messageId);
        //     // Preview only available when sending through an Ethereal account
        //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        // });
        sgMail.send(mailOptions);
        // server.send({
        //         from:"vinayakpassion123@gmail.com",
        //         to:item.email,
        //         subject:"Confirmation of Booking Appointment",
        //         text:"Hi "+ item.firstName + ",\nYour booking is confirmed."
        //     },
        //     function(err, message) { console.log(err || message); }
        // );
    })
    .catch(err => {
            res.status(400).send("unable to save to database");
    });
});

// Defined store route
patientRouter.route('/appointment').get(function (req, res) {
    Appointment.find(function (err, item){
        if(err){
            console.log(err);
        }
        else {
            res.json(item);
        }
    });
});

// Defined get data(index or listing) route
patientRouter.route('/').get(function (req, res) {
    Patient.find(function (err, itms){
        if(err){
            console.log(err);
        }
        else {
            res.json(itms);
        }
    });
});

// Defined edit route
patientRouter.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    Patient.findById(id, function (err, item){
        res.json(item);
    });
});

//  Defined update route
patientRouter.route('/update/:id').post(function (req, res) {
    Patient.findById(req.params.id, function(err, item) {
        if (!item)
            return next(new Error('Could not load Document'));
        else {
            // do your updates here
            item.item = req.body.item;

            item.save().then(item => {
                res.json('Update complete');
        })
        .catch(err => {
                res.status(400).send("unable to update the database");
        });
        }
    });
});

// Defined delete | remove | destroy route
patientRouter.route('/delete/:id').get(function (req, res) {
    Patient.findByIdAndRemove({_id: req.params.id},
        function(err, item){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
});

module.exports = patientRouter;