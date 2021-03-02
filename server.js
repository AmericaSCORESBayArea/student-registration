
const express = require('express');
const app = express();
const path = require('path');
const parser =  require('body-parser');
const cors =  require('cors');
const axios = require('axios');

let jsonParser = parser.json();


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: './src/env/development.env' });
  }

const id = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;
const baseUrl = process.env.BASEURL;
const muleEndPoint = process.env.MULEENDPOINT;


const reqHeaders = {
    headers: {
        'Content-Type': 'application/json'
    }
}

var corsOptions = {
    origin: baseUrl,
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
      console.log('url',muleEndPoint);
    let mRes =  await axios.post(muleEndPoint, data, reqHeaders)
    .then((response) => {
        console.log('success repsonse',response.data);
        return response;
    }, (error) => {
        console.log(error);
        console.log(error.data);
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


app.use(express.static(path.join(__dirname, 'src')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if(err) throw err;
    console.log("%c Server running", "color: green");
});


