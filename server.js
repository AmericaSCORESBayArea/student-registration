const express = require('express');
const app = express();
const path = require('path');
const bp =  require('body-parser');
const cors =  require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const generateAppConfig = () => {
  const dotEnvResult = dotenv.config();
  console.log(dotEnvResult);
  return !('error' in dotEnvResult) ? dotEnvResult.parsed : process.env;
};

const appConfig = generateAppConfig();

console.log(appConfig);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: './env/development.env'});
}

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

app.post('/register',cors(corsOptions), async(req, res) => {
  const data = {
    ...req.body,
    ContactRecordType:process.env.CONTACTRECORDID
  };
  console.log('data', req.body);
  const mRes = await axios.post(muleEndPoint, data, reqHeaders)
    .then((response) => {
      console.log('success response', response.data);
      return response;
    }, (error) => {
      console.log(error);
      console.log(error.data);
      return error;
    });
  if (mRes.isAxiosError) {
    res.status(mRes.response.status).json({data: mRes.response.data});
  } else {
    const rData = mRes.data;
    console.log(rData.Successful_Registration);
    res.status(mRes.status).json({data: rData.Successful_Registration});
  }
});

app.use(express.static(path.join(__dirname, '/public')));

const PORT = process.env.PORT || 3000;

app.get('/info',cors(corsOptions), async(req, res) => {
  console.log(appConfig);
  res.status(200).json({data: appConfig});
});

app.listen(PORT, err => {
  console.log("PROCESS ENV : ")
  console.log(appConfig);
  if (err) throw err;
  console.log("%c Server running", "color: green");
});