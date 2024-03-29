import React, {Fragment, useState, useReducer} from 'react';
import store from "store2";
import {Fade, Breadcrumb, BreadcrumbItem, FormGroup, ButtonGroup} from 'reactstrap';
import FormContainer from "./Form";
import SpinnerWithMessage from "../components/Spinner";

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


const determineNextFormIndex = (currentFormIndex, workflowConfig, workflowState) => {
  if (!!workflowState) {
    const matchingNextWorkflowIndices = workflowConfig.map((item, index) => {
      return {
        ...item,
        formIndex: index
      };
    }).filter((item) => workflowState.filter((item_2) => item.formName === item_2.formName && item_2.formState === null).length > 0).map((item) => item.formIndex);
    if (matchingNextWorkflowIndices.length > 0) {
      const nextIndex = matchingNextWorkflowIndices.reverse().pop();
      console.log(`next index : ${nextIndex}`);
      return nextIndex
    }
  }
  return 0;
};

const WorkflowContainer  = ({appConfig,workflowConfig,toolbarConfig,requiredConfig}) => {

  const workflowStateReducer = (state, newState) => {
    return [
      ...state.filter((item) => item.formName !== newState.formName),
      newState
    ];
  };

  const [workflowState, setWorkflowState] = useReducer(workflowStateReducer, generateInitialWorkflowState(workflowConfig));


  const [currentFormIndex, setCurrentFormIndex] = useState(determineNextFormIndex(0, workflowConfig, workflowState));
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
    const nextIndex = workflowConfig.map((item, index) => {
      return {
        ...item,
        formIndex: index
      };
    }).filter((item, index) => index > currentFormIndex && workflowState.filter((item_2) => item.formName === item_2.formName && item_2.formState === null).length > 0).map((item) => item.formIndex).reverse().pop();

    if (!isNaN(nextIndex)) {
      console.log(`next index : ${nextIndex}`);
      setCurrentFormIndex(nextIndex);
      setWorkflowState({
        formName,
        formState
      });
      if (localStore) {
        store.set(formName, formState, true);
      }
      toggleFormLoadState();
    }
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
                      requiredConfig={requiredConfig}
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
            <FormGroup
              key={`breadcrumbs`}
            >
              <Breadcrumb>
                {
                  workflowConfig.map((item, index) => {
                    return {
                      ...item,
                      index
                    };
                  }).filter((item, index) => {
                    return index <= currentFormIndex && !!item.breadCrumbLink
                  }).map((item, index) => {
                    const {breadCrumbPreviewFormStateValue} = item;
                    const formNameBreadcrumb = item.formName;
                    const isActiveBreadcrumb = item.index === currentFormIndex;
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
                            onClick={onBreadcrumbClick.bind(this, item.index)}
                          >{`${!!breadcrumbCurrentStateValue ? `${breadcrumbCurrentStateValue}` : `${formNameBreadcrumb}`}`}</a>
                          :
                          <span>{`${formNameBreadcrumb}`}</span>
                      }</BreadcrumbItem>
                    );
                  })
                }
              </Breadcrumb>
            </FormGroup>
            <FormGroup
              key={`toolbar`}
            >
              <ButtonGroup>
                {
                  toolbarConfig.map((item, index) => {
                    const {Component, name} = item;
                    return (
                      <div
                        key={index}
                      >
                        <Fragment>
                          <Component
                            toolbarConfig={item}
                            workflowState={workflowState}
                          />
                        </Fragment>
                      </div>
                    )
                  })
                }
              </ButtonGroup>
            </FormGroup>
          </Fade>
          :
          <div>
            <SpinnerWithMessage
              message={` `}
            />
          </div>
      }
    </div>
  );
};

export default WorkflowContainer;
