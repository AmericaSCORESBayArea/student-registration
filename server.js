const express = require('express');
const app = express();
const path = require('path');
const bp =  require('body-parser');
const cors =  require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const schoolIdMapping = require('./school_site_id_mapping.json');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

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

const reqHeaders = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const corsOptions = {
  origin: baseUrl,
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

app.post('/register',cors(corsOptions), async(req, res) => {

  let returnStatus = 400;
  let returnMessage = null;

  try {
    const data = {
      ...req.body,
      SchoolSiteId:req.body.SchoolName ? getSiteIdFromSchoolName() : "",
      ContactType: process.env.CONTACTRECORDTYPE,
      ContactRecordType: process.env.CONTACTRECORDTYPE
    };
    console.log('REQUEST BODY : ', req.body);
    console.log('DATA TO SEND : ',data);
    const mRes = await axios.post(muleEndPoint, data, reqHeaders)
      .then((response) => {
        console.log('success response', response.data);
        return response;
      }, (error) => {
        console.log(error);
        console.log(error.data);
        return error;
      });
    console.log(mRes);
    if (mRes.isAxiosError) {
      returnStatus = mRes.response.status;
      returnMessage = mRes.response.data;
    } else {
      const rData = mRes.data;
      console.log('RESPONSE : ', rData);
    }
  } catch(e) {
    console.error("server error encountered...");
    console.error(e);
  }
  res.status(returnStatus).json({data: returnMessage});
});

app.use(express.static(path.join(__dirname, '/public')));

const PORT = process.env.PORT || 3000;

app.get('/info',cors(corsOptions), async(req, res) => {


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


// const buildReactApp = () => {
//   console.log("Building React App...");
//   exec('cd ui && npm install && npm run build', (err, stdout, stderr) => {
//     console.log("React App Build Complete...");
//     if (err) {
//       console.error("Error Building React App!");
//       console.error(err);
//     }
//     if (!!stdout) {
//       console.log(`React App Build stdout: ${stdout}`);
//     }
//     if (!!stderr) {
//       console.log(`React App Build stderr: ${stderr}`);
//     }
//   });
// };
//
// buildReactApp();