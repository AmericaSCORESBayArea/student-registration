import React, {useState} from 'react';
import { Alert, Fade } from 'reactstrap';
import axios from 'axios';
import store from "store2";
import SpinnerWithMessage from '../components/Spinner';
import LocalizationContainer from "./Localization";

const reqHeaders = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const defaultLocalizationValue = `en`;
const localizationStoreKeyName = `localization`;

const getLocalStoreLocalizationValue = () => {
  const localStoreValue = store.get(localizationStoreKeyName);
  return !!localStoreValue ? localStoreValue : defaultLocalizationValue;
};

const ConfigContainer  = () => {

  const [configRequested, setConfigRequested] = useState(false);
  const [configRequestCompleted, setConfigRequestedCompleted] = useState(false);
  const [appConfig, setAppConfig] = useState(null);
  const [requestError, setRequestError] = useState("");
  const [localizationState,setLocalizationState] = useState(getLocalStoreLocalizationValue);

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

  const onLocalizationChange = (newValue) => {
    console.log(`LOCALIZATION CHANGE`);
    console.log(newValue);
    if (!!newValue) {
      store.set(localizationStoreKeyName, newValue);
      setLocalizationState(localizationState);
    }
  };

  return (
    <Fade
      in={true}
    >
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
        <LocalizationContainer
          appConfig={appConfig}
          localizationValue={localizationState}
          onLocalizationChange={onLocalizationChange}
        />
      }
    </Fade>
  );
};

export default ConfigContainer;