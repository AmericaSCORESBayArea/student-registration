require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const parser =  require('body-parser');
const cors =  require('cors');
//const router = express.Router();
const axios = require('axios');

let jsonParser = parser.json();


const id = process.env.MY_ID;
const secret = process.env.MY_SECRET;

const reqHeaders = {
    headers: {
        'Content-Type': 'application/json'
    }
}

var corsOptions = {
    origin: 'https://anypoint.mulesoft.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.post('/register',cors(corsOptions), async(req, res) => {
    //console.log(formData);
    let data = {
        "OtherLang": "",
        "Emergency_Contact_Phone3": "",
        "Gender": "",
        "Emergency_Contact_Name": "",
        "ParentHomeLang": "",
        "Second_Emergency_Contact_Phone1": "",
        "Relationship": "",
        "ParentPhone1": "",
        "Emergency_Contact_Phone2": "",
        "ParentLName": "",
        "LiabilityWaiver": false,
        "Ethnicity": "",
        "Second_Emergency_Contact_Relationship": "",
        "SchoolName": "",
        "PermissiontoCommuteAlone": "",
        "DCYFStuID": "",
        "MailingStreet": "",
        "Volunteer": "",
        "Grade": "",
        "Second_Emergency_Contact_Name": "",
        "DataReleaseWaiver": false,
        "MailingCity": "",
        "MediaReleaseWaiver": false,
        "ParentEnglishFluency": "",
        "Second_Emergency_Contact_Phone3": "",
        "MailingCountry": "",
        "MailingZip": 0,
        "ParentPhone3": "",
        "Emergency_Contact_Phone1": "",
        "ReducedPriceLunch": "",
        "Allergies": "",
        "Birthdate": "2021-01-11",
        "ContactRecordType": "",
        "Second_Emergency_Contact_Permission_to_Pickup_child": "",
        "Emergency_Contact_Relationship": "",
        "ParentEmail": "",
        "Emergency_Contact_Permission_to_Pickup_child": "",
        "ParentFName": "",
        "ParentPhone2": "",
        "LastName": "",
        "PersonalEmail": "",
        "MailingState": "",
        "Second_Emergency_Contact_Phone2": "",
        "MiddleName": "",
        "FirstName": "",
        "HomePhone": ""
      };
      //console.log(data);
    let mRes =  await axios.post('https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/6c091e72-50d1-49ac-b04d-ee5bb9bc9dbd/salesforce-data-api/3.0.8/m/contacts', data, reqHeaders)
    .then((response) => {
        //console.log('success repsonse',response.data);
        return response;
    }, (error) => {
        console.log(error);
        //console.log(error.data);
        return error;
    });
    //pResponse = postRequest(req.body);
    //console.log('res', pResponse); 
    //res.send(pResponse);
    if(mRes.isAxiosError){
        res.status(mRes.response.status).json({ data: mRes.response.data});
    }else{
         var rData = mRes.data;
        res.status(mRes.status).json({ data: rData});
    }
    // console.log('response',mRes.status);
    // console.log('response',mRes.statusText);
    // console.log('response',mRes.response.status);
    // console.log('response',mRes.response.data);
    // console.log('status',mRes.isAxiosError);
    // console.log('res', mRes.data);
    
    return mRes.data;
  }) 

function postRequest(formData){
    console.log(formData);
    let data = {
        "OtherLang": "",
        "Emergency_Contact_Phone3": "",
        "Gender": "",
        "Emergency_Contact_Name": "",
        "ParentHomeLang": "",
        "Second_Emergency_Contact_Phone1": "",
        "Relationship": "",
        "ParentPhone1": "",
        "Emergency_Contact_Phone2": "",
        "ParentLName": "",
        "LiabilityWaiver": false,
        "Ethnicity": "",
        "Second_Emergency_Contact_Relationship": "",
        "SchoolName": "",
        "PermissiontoCommuteAlone": "",
        "DCYFStuID": "",
        "MailingStreet": "",
        "Volunteer": "",
        "Grade": "",
        "Second_Emergency_Contact_Name": "",
        "DataReleaseWaiver": false,
        "MailingCity": "",
        "MediaReleaseWaiver": false,
        "ParentEnglishFluency": "",
        "Second_Emergency_Contact_Phone3": "",
        "MailingCountry": "",
        "MailingZip": 0,
        "ParentPhone3": "",
        "Emergency_Contact_Phone1": "",
        "ReducedPriceLunch": "",
        "Allergies": "",
        "Birthdate": "2021-01-11",
        "ContactRecordType": "",
        "Second_Emergency_Contact_Permission_to_Pickup_child": "",
        "Emergency_Contact_Relationship": "",
        "ParentEmail": "",
        "Emergency_Contact_Permission_to_Pickup_child": "",
        "ParentFName": "",
        "ParentPhone2": "",
        "LastName": "",
        "PersonalEmail": "",
        "MailingState": "",
        "Second_Emergency_Contact_Phone2": "",
        "MiddleName": "",
        "FirstName": "",
        "HomePhone": ""
      };
      console.log(data);
    axios.post('https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/6c091e72-50d1-49ac-b04d-ee5bb9bc9dbd/salesforce-data-api/3.0.8/m/contacts', data, reqHeaders)
    .then((response) => {
        console.log('server',response);
        return response;
    }, (error) => {
        console.log(error);
        console.log(error.data);
        return error;
    });
}


/* cors Config */
//app.use(cors());


app.use(express.static(path.join(__dirname, 'src')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if(err) throw err;
    console.log("%c Server running", "color: green");
});


