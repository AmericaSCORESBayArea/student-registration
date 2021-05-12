import React from 'react';
import workflowConfig from "../config/workflowConfig";
import toolbarConfig from "../config/toolbarConfig";
import WorkflowContainer from "./Workflow";

const LocalizationContainer  = ({appConfig}) => {

  const onLocalizationChange = (newValue) => {
    console.log(`LOCALIZATION CHANGE`);
    console.log(newValue);
  };

  return (
    <div>
      <WorkflowContainer
        appConfig={appConfig}
        workflowConfig={workflowConfig}
        toolbarConfig={toolbarConfig}
        onLocalizationChange={onLocalizationChange}
      />
    </div>
  );
};

export default LocalizationContainer;