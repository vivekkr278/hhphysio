import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import SubmitAppointment from "./SubmitAppointment";

import "react-datepicker/dist/react-datepicker.css";

class BookAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      appointmentDate: moment(),
      appointmentTime: "",
      message: ""
    };
    this.bookAppointment = new SubmitAppointment();
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  handleChange(date) {
    this.setState({
      appointmentDate: date
    });
  }
  handleSubmit(event) {
    let patientData = {
      name: this.state.firstName + " " + this.state.lastName,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      appointmentDate: this.state.appointmentDate.format('DD-MM-YYYY'),
      appointmentStartTime: this.state.appointmentTime.split("-")[0],
      appointmentEndTime: this.state.appointmentTime.split("-")[1],
      message: this.state.message
    };
    console.log("Data : " + JSON.stringify(patientData));

    this.bookAppointment.sendData(patientData);
    event.preventDefault();
  }

  render() {
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
                    <input
                      type="text"
                      id="fname"
                      className="form-control"
                      placeholder="Your firstname"
                      value={this.state.firstName}
                      onChange={event =>
                        this.setState({ firstName: event.target.value })
                      }
                      required={true}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      className="form-control"
                      placeholder="Your lastname"
                      value={this.state.lastName}
                      onChange={event =>
                        this.setState({ lastName: event.target.value })
                      }
                      required={true}
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="Your email address"
                      value={this.state.email}
                      onChange={event =>
                        this.setState({ email: event.target.value })
                      }
                      required={true}
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      className="form-control"
                      placeholder="Your Phone Number"
                      value={this.state.phoneNo}
                      onChange={event =>
                        this.setState({ phoneNo: event.target.value })
                      }
                      required={true}
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="subject">Appointment Date</label>
                    <DatePicker
                      selected={this.state.appointmentDate}
                      onChange={this.handleChange}
                      className="form-control"
                      dateFormat="DD-MM-YYYY"
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
                    <select
                      className="selectpicker form-control"
                      onChange={event =>
                        this.setState({ appointmentTime: event.target.value })
                      }
                      required={true}
                    >
                      <option>Choose Your Time Slot</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='09:00')}>09:00 AM-09:30 AM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='09:30')}>09:30 AM-10:00 AM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='10:00')}>10:00 AM-10:30 AM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='10:30')}>10:30 AM-11:00 AM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='11:00')}>11:00 AM-11:30 AM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='11:30')}>11:30 AM-12:00 PM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='12:00')}>12:00 PM-12:30 PM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='12:30')}>12:30 PM-01:00 PM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='13:00')}>01:00 PM-01:30 PM</option>

                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='16:30')}>04:30 PM-05:00 PM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='17:00')}>05:00 PM-05:30 PM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='17:30')}>05:30 PM-06:00 PM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='18:00')}>06:00 PM-06:30 PM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='18:30')}>06:30 PM-07:00 PM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='19:00')}>07:00 PM-07:30 PM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='19:30')}>07:30 PM-08:00 PM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='20:00')}>08:00 PM-08:30 PM</option>
                      <option disabled={moment(this.state.appointmentDate).format("DD-MM-YYYY")==moment(new Date()).format("DD-MM-YYYY") && (moment(new Date()).format('HH:mm')>='20:30')}>08:30 PM-09:00 PM</option>
                    </select>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      className="form-control"
                      placeholder="Your Message"
                      value={this.state.message}
                      onChange={event =>
                        this.setState({ message: event.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-group text-center appointmentBtn">
                  <input
                    type="button"
                    defaultValue="Request Appointment"
                    onClick={this.handleSubmit.bind(this)}
                    className="btn btn-primary btn-submit"
                  />
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
