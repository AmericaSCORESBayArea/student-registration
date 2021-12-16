import React, {useState, useReducer} from 'react';
import store from "store2";
import { Alert, Fade } from 'reactstrap';
import axios from 'axios';
import SpinnerWithMessage from '../components/Spinner';
import WorkflowContainer from "./Workflow";
import workflowConfigInitial from "../config/workflowConfig";
import toolbarConfig from "../config/toolbarConfig";
import requiredConfig from "../config/requiredConfig";

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

const generateInitialWorkflowState = (workflowConfig) => {
  if (!workflowConfig) return [];
  return workflowConfig.filter((item) => !!item.formName).map((item) => {
    const {formName,localStore} = item;
    const initialFormState = !!localStore ? store.get(formName) : null;
    return {
      formName,
      formState:initialFormState
    };
  });
};

const ConfigContainer  = ({localizationValue}) => {

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
    if (objectConfigInput) {
      try {
        let returnObj = {};
        Object.keys(objectConfigInput).map((item) => {
          if (item !== "decisionValues") {
            const fieldNameToUse = blStartsWithKeyCharacter(item) ? getLocalizedValue(item) : item;
            return returnObj[fieldNameToUse] = generateLocalizedConfig(objectConfigInput[item])
          }
          return returnObj[item] = objectConfigInput[item]
        });
        return returnObj;
      } catch (e) {
        console.error(`error in handleObjectLocalizedConfig`);
        console.error(e);
      }
      return objectConfigInput;
    }
    return null;
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
  
  const workflowStateReducer = (state, newState) => {
    return [
      ...state.filter((item) => item.formName !== newState.formName),
      newState
    ];
  };

  const [configRequested, setConfigRequested] = useState(false);
  const [configRequestCompleted, setConfigRequestedCompleted] = useState(false);
  const [appConfig, setAppConfig] = useState(null);
  const [workflowConfig, setWorkflowConfig] = useState(workflowConfigInitial);
  const [workflowState, setWorkflowState] = useReducer(workflowStateReducer, generateInitialWorkflowState(workflowConfigInitial));
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

  const appendWorkflowStates = (newWorkFlowStates) => {
    generateInitialWorkflowState(newWorkFlowStates).map((item) => {
      const matchingExistingWorkflowState = workflowState.find((item_2) => item.formName === item_2.formName)
      if (!matchingExistingWorkflowState) setWorkflowState(item)
    })
    setWorkflowConfig([...workflowConfigInitial,...newWorkFlowStates])
  }

  const appConfigLocalized = generateLocalizedConfig(appConfig);
  const workflowConfigLocalized = generateLocalizedConfig(workflowConfig);
  const toolbarConfigLocalized = generateLocalizedConfig(toolbarConfig);
  const requiredConfigLocalized = generateLocalizedConfig(requiredConfig);

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
            requiredConfig={requiredConfigLocalized}
            workflowState={workflowState}
            setWorkflowState={setWorkflowState}
            appendWorkflowStates={appendWorkflowStates}
          />
        </div>
      }
    </Fade>
  );
};

export default ConfigContainer;