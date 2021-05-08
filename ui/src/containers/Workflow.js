import React, {useState, useReducer} from 'react';
import store from "store2";
import { Fade,Breadcrumb,BreadcrumbItem,Spinner } from 'reactstrap';
import workflowConfig from "../config/workflowConfig";
import FormContainer from "./Form";

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

const WorkflowContainer  = ({appConfig}) => {

  const workflowStateReducer = (state, newState) => {
    return [
      ...state.filter((item) => item.formName !== newState.formName),
      newState
    ];
  };

  const [workflowState, setWorkflowState] = useReducer(workflowStateReducer, generateInitialWorkflowState(workflowConfig));

  const setInitialFormIndex = () => {
    let proposedInitialFormState = 0;
    if (!!workflowState) {
      const matchingNextWorkflowIndex = workflowConfig.map((item, index) => {
        return {
          ...item,
          formIndex: index
        };
      }).filter((item) => workflowState.filter((item_2) => item.formName === item_2.formName && item_2.formState === null).length > 0).map((item) => item.formIndex);
      if (matchingNextWorkflowIndex.length > 0) {
        proposedInitialFormState = matchingNextWorkflowIndex.reverse().pop();
      }
    }
    return proposedInitialFormState;
  };

  const [currentFormIndex, setCurrentFormIndex] = useState(setInitialFormIndex());
  const [formLoading, setFormLoading] = useState(false);

  if (!workflowConfig) return null;

  const toggleFormLoadState = () => {
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
    }, 500);
  };

  const formSubmitCallback = (config, formState) => {
    const {formName, localStore} = workflowConfig[currentFormIndex];
    setCurrentFormIndex(currentFormIndex + 1);
    setWorkflowState({
      formName,
      formState
    });
    if (localStore) {
      store.set(formName, formState, true);
    }
    toggleFormLoadState();
  };

  const onBreadcrumbClick = (formIndex) => {
    setCurrentFormIndex(formIndex);
    toggleFormLoadState();
  };

  const getFormStateByFormName = (formNameToGet) => !!workflowState ? workflowState.filter((item_2) => formNameToGet === item_2.formName).map((item_2) => item_2.formState).pop() : null;

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
                  const {breadCrumbPreviewFormStateValue} = item;
                  const formNameBreadcrumb = item.formName;
                  const isActiveBreadcrumb = index === currentFormIndex;
                  const currentFormState = getFormStateByFormName(formNameBreadcrumb);
                  const breadcrumbCurrentStateValue = !!breadCrumbPreviewFormStateValue && !!currentFormState ? currentFormState.filter((item) => item.formValue === breadCrumbPreviewFormStateValue).map((item) => item.value).pop() : null;

                  return (
                    <BreadcrumbItem
                      key={index}
                      active={isActiveBreadcrumb}
                      style={{cursor: isActiveBreadcrumb ? "default" : "pointer"}}
                    >{
                      !isActiveBreadcrumb ?
                        <a
                          onClick={onBreadcrumbClick.bind(this, index)}
                        >{`${formNameBreadcrumb}${!!breadcrumbCurrentStateValue ? ` (${breadcrumbCurrentStateValue})` : ``}`}</a>
                        :
                        <span>{`${formNameBreadcrumb}`}</span>
                    }</BreadcrumbItem>
                  );
                })
              }
            </Breadcrumb>
            {
              workflowConfig.filter((item, index) => index === currentFormIndex).map((item, index) => {
                const {formName} = item;
                const currentFormState = getFormStateByFormName(formName);
                return (
                  <Fade
                    in={true}
                  >
                    <FormContainer
                      appConfig={appConfig}
                      workflowConfig={item}
                      initialFormState={!!currentFormState && Object.keys(currentFormState).length > 0 ? currentFormState : null}
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