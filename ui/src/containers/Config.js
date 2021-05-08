import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Alert, Spinner, Fade } from 'reactstrap';
import FirebaseAuthContainer from "./FirebaseAuth";

import SpinnerWithMessage from '../components/Spinner';

const reqHeaders = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const ConfigContainer  = () => {

  const [configRequested, setConfigRequested] = useState(false);
  const [configRequestCompleted, setConfigRequestedCompleted] = useState(false);
  const [appConfig, setAppConfig] = useState(null);
  const [requestError, setRequestError] = useState("");

  const runGetConfigRequest = () => {
    setConfigRequested(true);
    axios.get('/info', {
      header: reqHeaders
    }).then(function (response) {
      const {data} = response;
      if (!!data) {
        setAppConfig(data);
      }
    }).catch(function (error) {
      console.error(error);
      setRequestError(error.message);
    }).then(function () {
      setConfigRequestedCompleted(true);
    });
  };

  if (!configRequested) {
    if (!configRequestCompleted) {
      if (!appConfig) {
        runGetConfigRequest();
      }
    }
  }

  return (
    <Fade in={true}>
      {
        requestError.length > 0 &&
        <Alert
          color="danger"
        >{`${requestError}`}</Alert>
      }
      {
        configRequested && !configRequestCompleted &&
        <SpinnerWithMessage
          message={`Loading...`}
        />
      }
      {
        !!appConfig &&
        <FirebaseAuthContainer
          appConfig={appConfig}
        />
      }
    </Fade>
  );
};

export default ConfigContainer;