const express = require('express');
const app = express();
const path = require('path');
const bp = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const schoolIdMapping = require('./school_site_id_mapping.json');

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

const configurationStartingKeyValueIndicatingAPIAllowed = `REACT_APP_`;
const generateAppConfig = () => {
  const dotEnvResult = dotenv.config({path: '.env'});
  return !('error' in dotEnvResult) ? dotEnvResult.parsed : process.env;
};
const appConfig = generateAppConfig();

const id = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;
const baseUrl = process.env.BASEURL;
const muleEndPoint = process.env.MULEENDPOINT;

axios.defaults.headers.common['client_id'] = id;
axios.defaults.headers.common['client_secret'] = secret;

const searchResponseToFormValuesMapping = {
  Id:"Id",
  FirstName:"FirstName",
  MiddleName:"MiddleName",
  LastName:"LastName",
  SchoolName:"SchoolAttending",
  PersonalEmail:"PersonalEmail",
  HomePhone:"HomePhone",
  Gender:"Gender",
  Grade:"Grade",
  Ethnicity:"Ethnicity",
  ReducedPriceLunch:"ReducedPriceLunch",
  Allergies:"Allergies",
  ParentFName:"ParentFName",
  ParentLName:"ParentLName",
  ParentEmail:"ParentEmail",
  Relationship:"Relationship",
  ParentPhone1:"ParentPhone1",
  ParentPhone2:"ParentPhone2",
  MailingStreet: "StreetAddress",
  MailingCity:"City",
  MailingState:"State",
  MailingZip:"Zip",
  MailingCountry:"Country",
  ParentHomeLang:"HomeLanguage",
  Volunteer:"Volunteer",
  Emergency_Contact_Name:"Emergency_Contact_Name",
  Emergency_Contact_Relationship:"Emergency_Contact_Relationship",
  Emergency_Contact_Phone1:"Emergency_Contact_Phone1",
  Emergency_Contact_Phone2:"Emergency_Contact_Phone2",
  Second_Emergency_Contact_Name:"Second_Emergency_Contact_Name",
  Second_Emergency_Contact_Relationship:"Second_Emergency_Contact_Relationship",
  Second_Emergency_Contact_Phone1:"Second_Emergency_Contact_Phone1",
  Second_Emergency_Contact_Phone2:"Second_Emergency_Contact_Phone2",
  Birthdate:"DateOfBirth"
}

const reqHeaders = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const corsOptions = {
  origin: appConfig.NODE_ENV === "development" ? "http://localhost:4000" : baseUrl,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const getSiteIdFromSchoolName = (schoolName) => {
  if (schoolIdMapping) {
    if (Array.isArray(schoolIdMapping)) {
      if (schoolIdMapping.length > 0) {
        const matchingSchoolIds = schoolIdMapping.filter((item) => item.schoolName && item.siteId && item.schoolName === schoolName).map((item) => item.siteId);
        if (matchingSchoolIds.length > 0) {
          return matchingSchoolIds[0];
        }
      }
    }
  }
  return "";
}

app.options('/search',cors(corsOptions), async (req, res) => {
  res.status(200).json({});
})

app.post('/search',cors(corsOptions), async (req, res) => {
  let rStatus = 400;
  let rData = null;
  if (req.body) {
    if (req.body.phoneNumber) {
      const requestURL = `${muleEndPoint}/searchByPhoneNumber?phoneNumber=${appConfig.NODE_ENV === "development" ? "1234567890" : req.body.phoneNumber.slice(2,)}`
      const mRes = await axios.get(requestURL, reqHeaders)
        .then((response) => {
          return response;
        }, (error) => {
          return error.response;
        });
      rData = mRes.data.map((item) => {
        let newObj = {}
        Object.keys(searchResponseToFormValuesMapping).forEach((mapping) => {
          if (item[searchResponseToFormValuesMapping[mapping]]) {
            newObj[mapping] =item[searchResponseToFormValuesMapping[mapping]]
          } else {
            newObj[mapping] = ""
          }
        })
        return newObj
      });
      rStatus = mRes.status;
    }
  }
  res.status(rStatus).json(rData);
})

app.post('/register', cors(corsOptions), async (req, res) => {
  let rStatus = 400;
  let rData = null;
  try {
    const data = {
      ...req.body,
      SchoolSiteId: req.body.SchoolName ? getSiteIdFromSchoolName(req.body.SchoolName) : "",
      ContactType: process.env.CONTACTRECORDTYPE,
      ContactRecordType: process.env.CONTACTRECORDTYPE
    };
    console.log('Form Data from UI : ', req.body);
    console.log(`Data to Send to Mulesoft API ${muleEndPoint} :`, data);
    const mRes = await axios.post(muleEndPoint, data, reqHeaders)
      .then((response) => {
        console.log(`Request Complete!`)
        return response;
      }, (error) => {
        console.error(`Request ERRORS!`)
        console.error(error);
        return error.response;
      });
    rData = mRes.data;
    rStatus = mRes.status;
    console.log(`Mulesoft Response Status + Data : ${rStatus} : ${typeof rData === "object" ? JSON.stringify(rData) : rData}`);
  } catch (e) {
    rData = "";
    rStatus = 502;
    console.error("Server error encountered...");
    console.error(e);
  }
  res.status(rStatus).json({data: rData});
});

app.use(express.static(path.join(__dirname, '/public')));

const PORT = process.env.PORT || 3000;

app.get('/info', cors(corsOptions), async (req, res) => {
  let allowedAPIConfigResponse = {};
  Object.keys(appConfig)
    .filter((item) => item.indexOf(configurationStartingKeyValueIndicatingAPIAllowed) === 0)
    .map((item) => {
      allowedAPIConfigResponse[item] = appConfig[item];
    });
  res.status(200).json(allowedAPIConfigResponse);
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log("%c Server running", "color: green");
});