import React, {useState} from 'react';
import { Alert, Fade } from 'reactstrap';
import axios from 'axios';
import SpinnerWithMessage from '../components/Spinner';
import WorkflowContainer from "./Workflow";
import workflowConfig from "../config/workflowConfig";
import toolbarConfig from "../config/toolbarConfig";

import localization_en from "../config/strings/en";
import localization_es from "../config/strings/es";
import localization_zh from "../config/strings/zh";

const reqHeaders = {
  headers: {
    'Content-Type': 'application/json'
  }
};
const localizationStrings = {
  en:localization_en,
  es:localization_es,
  zh:localization_zh
};

const ConfigContainer  = ({localizationValue}) => {

  const [configRequested, setConfigRequested] = useState(false);
  const [configRequestCompleted, setConfigRequestedCompleted] = useState(false);
  const [appConfig, setAppConfig] = useState(null);
  const [requestError, setRequestError] = useState("");

  if (!localizationValue) return null;

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

  const blStartsWithKeyCharacter = (stringInput) => stringInput.indexOf(`!`) === 0;
  const getLocalizedValue = (keyString) => {
    const lookupValue = keyString.slice(1);
    if (!!localizationStrings[localizationValue][lookupValue]) {
      return localizationStrings[localizationValue][lookupValue];
    }
    return keyString;
  }
  const handleArrayLocalizedConfig = (arrayConfigInput) => arrayConfigInput.map((item) => generateLocalizedConfig(item));
  const handleStringLocalizedConfig = (stringConfigInput) => {
    try {
      if (!!localizationValue) {
        if (!!localizationStrings[localizationValue]) {
          if (blStartsWithKeyCharacter(stringConfigInput)) {
            return getLocalizedValue(stringConfigInput);
          }
        }
      }
    } catch (e) {
      console.error(`error in handleStringLocalizedConfig`);
      console.error(e);
    }
    return stringConfigInput;
  };
  const handleObjectLocalizedConfig = (objectConfigInput) => {
    try {
      let returnObj = {};
      Object.keys(objectConfigInput).map((item) => {
        const fieldNameToUse = blStartsWithKeyCharacter(item) ? getLocalizedValue(item) : item;
        return returnObj[fieldNameToUse] = generateLocalizedConfig(objectConfigInput[item])
      });
      return returnObj;
    } catch (e) {
      console.error(`error in handleObjectLocalizedConfig`);
      console.error(e);
    }
    return objectConfigInput;
  };

  const generateLocalizedConfig = (configInput) => {
    try {
      return Array.isArray(configInput) ?
        handleArrayLocalizedConfig(configInput) :
        typeof configInput === "string" ?
          handleStringLocalizedConfig(configInput) :
          typeof configInput === "object" ?
            handleObjectLocalizedConfig(configInput) :
            configInput;
    } catch (e) {
      console.error(`error in generateLocalizedConfig`);
      console.error(e);
    }
    return configInput;
  };

  const appConfigLocalized = generateLocalizedConfig(appConfig);
  const workflowConfigLocalized = generateLocalizedConfig(workflowConfig);
  const toolbarConfigLocalized = generateLocalizedConfig(toolbarConfig);

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
        <div>
          <WorkflowContainer
            appConfig={appConfigLocalized}
            workflowConfig={workflowConfigLocalized}
            toolbarConfig={toolbarConfigLocalized}
          />
        </div>
      }
    </Fade>
  );
};

export default ConfigContainer;