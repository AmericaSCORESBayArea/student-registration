import React from 'react';
import workflowConfig from "../config/workflowConfig";
import toolbarConfig from "../config/toolbarConfig";
import WorkflowContainer from "./Workflow";

import localization_en from "../config/strings/en";
import localization_es from "../config/strings/es";

const localizationStrings = {
  en:localization_en,
  es:localization_es
};

const LocalizationContainer  = ({appConfig,localizationValue,onLocalizationChange}) => {
  const handleArrayLocalizedConfig = (arrayConfigInput) => arrayConfigInput.map((item) => generateLocalizedConfig(item));
  const handleStringLocalizedConfig = (stringConfigInput) => {
    try {
      if (!!localizationValue) {
        if (!!localizationStrings[localizationValue]) {
          if (stringConfigInput.indexOf(`!`) === 0) {
            const lookupValue = stringConfigInput.slice(1);
            if (!!localizationStrings[localizationValue][lookupValue]) {
              return localizationStrings[localizationValue][lookupValue];
            }
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
      Object.keys(objectConfigInput).map((item) => returnObj[item] = generateLocalizedConfig(objectConfigInput[item]));
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
    <div>
      <WorkflowContainer
        appConfig={appConfigLocalized}
        workflowConfig={workflowConfigLocalized}
        toolbarConfig={toolbarConfigLocalized}
        onLocalizationChange={onLocalizationChange}
      />
    </div>
  );
};

export default LocalizationContainer;