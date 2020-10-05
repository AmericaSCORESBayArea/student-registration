require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const parser =  require('body-parser');
//const router = express.Router();
const axios = require('axios');

let jsonParser = parser.json();


const id = process.env.MY_ID;
const secret = process.env.MY_SECRET;

const reqHeaders = {
    headers: {
        'client_id': id, 
        'client_secret': secret,
        'Content-Type': 'application/json',
    }
}

function postRequest(formData){
    console.log(formData);
	axios.post('https://salesforce-data-api-proxy-prod.us-e2.cloudhub.io/api/contact', formData, reqHeaders)
	.then((response) => {
        console.log(response);
        return response;
	}, (error) => {
        console.log(error);
        console.log(error.data);
        return error;
	});
}

app.get('/src', function(req, res){
	console.log('html loaded');
    res.sendFile(path.join(__dirname+'/index.html'));
    //res.sendFile(path.join(__dirname+'/app.js'));
});

app.post('/postRequest', jsonParser, function(req, res){
    console.log('postRequest called');
    apiRes = postRequest(req.body);
    // router.get('/src', function(req, res){
    // });
});


app.use(express.static(path.join(__dirname, 'src')));
app.listen(8000);


