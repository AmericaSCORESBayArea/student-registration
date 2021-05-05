import React, {useState, useReducer} from 'react';
import { Fade,Breadcrumb,BreadcrumbItem,Spinner } from 'reactstrap';
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
  const [formLoading, setFormLoading] = useState(false);

  if (!workflowConfig) return null;

  const onValueChange = (config, newState) => {
    const {formName} = config;
    setWorkflowState({
      formName,
      formState: newState
    });
  };

  const formSubmitCallback = (config, formState) => {
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
    }, 500);
    setCurrentFormIndex(currentFormIndex + 1);
  };

  return (
    <div>
      {
        !formLoading ?
          <Fade
            in={true}
          >
            <Breadcrumb>
              {
                workflowConfig.filter((item, index) => index <= currentFormIndex).map((item, index) => {
                  const formNameBreadcrumb = item.formName;
                  return (
                    <BreadcrumbItem
                      key={index}
                      active={index === index}
                    >{`${formNameBreadcrumb}`}</BreadcrumbItem>
                  );
                })
              }
            </Breadcrumb>
            {
              workflowConfig.filter((item, index) => index === currentFormIndex).map((item, index) => {
                const {formConfig} = item;
                return (
                  <Fade
                    in={true}
                  >
                    <FormContainer
                      workflowConfig={item}
                      formSubmitCallback={formSubmitCallback}
                    />
                  </Fade>
                );
              })
            }
            {
              currentFormIndex >= workflowConfig.length &&
              <h3>Workflow Complete</h3>
            }
          </Fade>
          :
          <div>
            <Spinner size="sm" color="primary"/>{' '}
          </div>
      }
    </div>
  );
};

export default WorkflowContainer;