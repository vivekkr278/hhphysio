import axios from 'axios';
import qs from 'qs';
import moment from "moment";
class SubmitAppointment {

    sendData(data) {
        /*axios.post('http://localhost:4200/patient/book', {
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
            });*/
            var bodyFormData = new FormData();
            //bodyFormData.set('userName', 'Fred');
            //let postData = {
                bodyFormData.set('created_by', "dcf531edc9b229acfe0f4b87e1e278dd")
                bodyFormData.set('doc_id', "dcf531edc9b229acfe0f4b87e1e278dd")
                bodyFormData.set('doc_parent_id', "dcf531edc9b229acfe0f4b87e1e278dd")
                bodyFormData.set('app_cli_id', "fc394e9935fbd62c8aedc372464e1965")
                bodyFormData.set('patientflag', true)
                bodyFormData.set('p_name', data.name)
                bodyFormData.set('p_mobileno', data.phoneNo)
                bodyFormData.set('app_date', data.appointmentDate)
                bodyFormData.set('app_starttime', data.appointmentStartTime)
                bodyFormData.set('app_endtime', data.appointmentEndTime)
                bodyFormData.set('app_remark', data.message)
                bodyFormData.set('app_status', "pending")
                bodyFormData.set('sms_sent', "y")
                bodyFormData.set('emailallow', "y")
                bodyFormData.set('p_email_id', data.email)
                bodyFormData.set('app_source', "online")
                bodyFormData.set('source', "web")
                bodyFormData.set('action', "add")
              //};
          
            //   let axiosConfig = {
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     }
            //   };
            fetch(`https://cors-anywhere.herokuapp.com/https://www.clinicia.com/calendar/web_api/appointment.php`,{
              method: 'post',
              body: bodyFormData,
              headers: {
                    'Content-Type': ['application/x-www-form-urlencoded','charset=utf-8'],
                    'Origin':'x-requested-with'

              }
            })
            .then((response) => {
                console.log("response  :"+response);
                //return response.json()
            })
            .then((responseData) => { // responseData = undefined
              console.log("response data :"+responseData);
              //_that.parseResponseFromServer(responseData)
            })
            .catch((error) => {
                console.log("Error : "+JSON.stringify(error));
            });
            //   axios({
            //     method: 'post',
            //     url: 'https://www.clinicia.com/calendar/web_api/appointment.php',
            //     data: bodyFormData,
            //     config: { headers: {'Content-Type': 'multipart/form-data' }}
            //     })
            //     .then(response)
            //     .then(function (response) {
            //         //handle success
            //         console.log("Success : "+JSON.stringify(response));
            //     })
            //     .catch(function (error) {
            //         //handle error
            //         console.log("Error : "+JSON.stringify(error));
            //     });
            //  console.log("Post_Data : "+JSON.stringify(postData));
            //   axios.post('https://www.clinicia.com/calendar/web_api/appointment.php', qs.stringify(postData), axiosConfig)
            //   .then((res) => {
            //     console.log("Appointment RESPONSE RECEIVED: ", JSON.stringify(res));
            //     var data={
            //         doc_id: "dcf531edc9b229acfe0f4b87e1e278dd",
            //         clinic_list: "fc394e9935fbd62c8aedc372464e1965",
            //         source: "web",
            //         show_title: "n",
            //         start: res.appointmentlist[0].app_creation_date.split(" ")[0],
            //         end: moment(res.appointmentlist[0].app_creation_date.split(" ")[0]).add(7, 'days')
            //     }
            //     axios.post('https://www.clinicia.com/calendar/web_api/appointmentselect.php', qs.stringify(data), axiosConfig)
            //     .then((result) => {
            //         console.log("Appointment Select RESPONSE RECEIVED: ", JSON.stringify(result));
            //         alert("You will recieve confirmation message once it's approved by Dr. Vinayak Jyothi");
            //       })
            //       .catch((error) => {
            //         console.log("Appointment Select AXIOS ERROR: ", JSON.stringify(error));
            //       })
            //   })
            //   .catch((err) => {
            //     console.log("Appointment AXIOS ERROR: ", JSON.stringify(err));
            //   })
            //alert("Data : "+qs.stringify(postData));
    }
}

export default SubmitAppointment;