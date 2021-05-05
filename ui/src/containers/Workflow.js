import React, {useState, useReducer} from 'react';
import { Fade,Breadcrumb,BreadcrumbItem } from 'reactstrap';
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
      formState: newState
    });
  };

  return (
    <div>
      {
        workflowConfig.filter((item, index) => index === currentFormIndex).map((item, index) => {
          const {formConfig} = item;

          const formsBefore = workflowConfig.filter((item_2, index_2) => index_2 < index);
          const formsAfter = workflowConfig.filter((item_2, index_2) => index_2 > index);

          return (
            <Fade
              key={index}
              in={true}
            >
              <div>
                <Breadcrumb>
                  {
                    workflowConfig.filter((item_2, index_2) => index_2 <= index).map((item_2, index_2) => {
                      const formNameBreadcrumb = item_2.formName;
                      return (
                        <BreadcrumbItem
                          key={index_2}
                          active={index === index_2}
                        >{`${formNameBreadcrumb}`}</BreadcrumbItem>
                      );
                    })
                  }
                </Breadcrumb>
                <FormContainer
                  formConfig={formConfig}
                />
              </div>
            </Fade>
          )
        })
      }
    </div>
  );
};

export default WorkflowContainer;