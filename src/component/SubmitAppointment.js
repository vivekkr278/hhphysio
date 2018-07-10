import axios from 'axios';
class SubmitAppointment {

    sendData(data) {
        axios.post('http://localhost:4200/patient/book', {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNo: data.phoneNo,
            appointmentDate: data.appointmentDate,
            appointmentTime: data.appointmentTime,
            message: data.message,
            approved:false,
            rescheduled:false,
            rescheduledDate:"",
            rescheduledTime:""
        })
            .then(function (response) {
                //alert("Response : "+JSON.stringify(response));
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default SubmitAppointment;