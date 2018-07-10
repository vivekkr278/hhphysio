import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import SubmitAppointment from './SubmitAppointment';

import 'react-datepicker/dist/react-datepicker.css';

class BookAppointment extends Component {
    constructor (props) {
        super(props)
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            phoneNo:"",
            appointmentDate:moment(),
            appointmentTime: "",
            message:""
        };
        this.bookAppointment = new SubmitAppointment();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            appointmentDate: date
        });
    }
    handleSubmit(event) {
        console.log("Data : "+JSON.stringify(this.state));
        this.bookAppointment.sendData(this.state);
        event.preventDefault();
    }
    render() {
        window.scrollTo(0, 0);
        return (
            <div className="pageContainer">
                <div className="container bookAppointment">
                    <div className="row">
                        <div className="col-md-12 text-center heading">
                            <h2>Book an Appointment</h2>
                            <p>Fill details below to book a quick appointment</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form className="appointment-wrap animate-box fadeInUp animated-fast">
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label htmlFor="fname">First Name</label>
                                        <input type="text" id="fname" className="form-control" placeholder="Your firstname" value={this.state.firstName}
                                               onChange={(event) => this.setState({'firstName':event.target.value})} required={true}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lname">Last Name</label>
                                        <input type="text" id="lname" className="form-control" placeholder="Your lastname" value={this.state.lastName}
                                               onChange={(event) => this.setState({'lastName':event.target.value})} required={true}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" id="email" className="form-control" placeholder="Your email address" value={this.state.email}
                                               onChange={(event) => this.setState({'email':event.target.value})} required={true}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="text" id="phone" className="form-control" placeholder="Your Phone Number" value={this.state.phoneNo}
                                               onChange={(event) => this.setState({'phoneNo':event.target.value})} required={true}/>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label htmlFor="subject">Appointment Date</label>
                                        <DatePicker
                                            selected={this.state.appointmentDate}
                                            onChange={this.handleChange}
                                            className="form-control"
                                            dateFormat="DD/MM/YYYY"
                                            minDate={moment()}
                                            maxDate={moment().add(3, "months")}
                                            showDisabledMonthNavigation
                                            withPortal
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label htmlFor="subject">Time</label>
                                        <select className="selectpicker form-control"
                                                onChange={(event) => this.setState({'appointmentTime':event.target.value})} required={true}>
                                            <option>Choose Your Time Slot</option>
                                            <option>9:00-9:45</option>
                                            <option>9:45-10:30</option>
                                            <option>10:30-11:15</option>
                                            <option>11:15-12:00</option>
                                            <option>12:00-12:45</option>
                                            <option>16:00-16:45</option>
                                            <option>16:45-17:30</option>
                                            <option>17:30-18:15</option>
                                            <option>18:15-19:00</option>
                                            <option>19:00-19:45</option>
                                            <option>19:45-20:30</option>
                                            <option>20:30-21:15</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Your Message" value={this.state.message}
                                                  onChange={(event) => this.setState({'message':event.target.value})}></textarea>
                                    </div>
                                </div>
                                <div className="form-group text-center appointmentBtn">
                                    <input type="button" defaultValue="Request Appointment" onClick={this.handleSubmit.bind(this)} className="btn btn-primary btn-submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BookAppointment;
