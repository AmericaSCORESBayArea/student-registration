import React, {useState, useReducer} from 'react';
import { Fade } from 'reactstrap';
import workflowConfig from "../config/workflowConfig";
import FormContainer from "./Form";

const generateInitialWorkflowState = (workflowConfig) => {
  if (!workflowConfig) return [];
  return workflowConfig.filter((item) => !!item.formName).map((item) => {
    const {formName} = item;
    return {
      formName,
      formState:{}
    };
  });
};

const WorkflowContainer  = () => {

  const workflowStateReducer = (state, newState) => {
    return [
      ...state.filter((item) => item.formName !== newState.formName),
      newState
    ];
  };

  const [workflowState, setWorkflowState] = useReducer(workflowStateReducer, generateInitialWorkflowState(workflowConfig));
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  if (!workflowConfig) return null;

  const onValueChange = (config, newState) => {
    const {formName} = config;
    setWorkflowState({
      formName,
      formState:newState
    });
  };

  return (
    <div>
      {
        workflowConfig.filter((item,index) => index === currentFormIndex).map((item,index) => {
          const {formConfig} = item;
          return (
            <Fade
              key={index}
              in={true}
            >
              <FormContainer
                formConfig={formConfig}
              />
            </Fade>
          )
        })
      }
    </div>
  );
};

export default WorkflowContainer;