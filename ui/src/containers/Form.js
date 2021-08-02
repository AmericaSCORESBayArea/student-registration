import React, {useState,useReducer,useEffect} from 'react';
import axios from 'axios';
import { Button, Form, Alert, Spinner, Fade } from 'reactstrap';

import FormElementController from "../components/form/_controller";
import SpinnerWithMessage from "../components/Spinner";
import ModalComponent from "../components/Modal";
import Waiver from "../components/Waiver";
import isValidEmail from "../modules/isValidEmail";
import RequiredWrapper from "../components/form/Required";

const reqHeaders = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const generateInitialFormState = (formConfig) => {
  if (!formConfig) return [];
  return formConfig.filter((item) => !!item.formValue).map((item) => {
    const {formValue, dataType, staticValue} = item;
    return {
      formValue,
      value: dataType === "number" ? 0 : dataType === "static" ? staticValue : ""
    };
  });
};

const generateInitialFormOverrideState = (formConfig) => {
  if (!formConfig) return [];
  return formConfig.filter((item) => !!item.formValue && !!item.fillInOptionFormValueOverride && !!item.fillInOptionValues && Array.isArray(item.fillInOptionValues) && item.fillInOptionValues.length > 0).map((item) => {
    const {formValue, dataType, fillInOptionValues, fillInOptionFormValueOverride} = item;
    return {
      formValue,
      options:fillInOptionValues,
      formOverrideValue:fillInOptionFormValueOverride,
      value: dataType === "number" ? 0 : ""
    };
  });
};

const FormContainer  = ({appConfig,workflowConfig, requiredConfig,initialFormState,initialFormOverrideState,formSubmitCallback}) => {

  const {
    displayWaiver,
    displayWarnings,
    formConfig,
    postEndpoint,
    submitOnValueChange,
    submitOnAnyValue,
    waiverModalTitleText,
    waiverReviewAndAcceptRequestMessage,
    waiverAcceptButtonText,
    waiverDeclineButtonText,
    waiverCloseButtonText,
    waiverShowWaiverButtonText,
    waiverWaiverAcceptedMessage
  } = workflowConfig;

  const formStateReducer = (state, newState) => {
    return [
      ...state.filter((item) => item.formValue !== newState.formValue),
      newState
    ];
  };

  const [formFadeState, setFormFadeState] = useState(true)
  const [resetButtonFadeState, setResetButtonFadeState] = useState(true)
  const [formState, setFormState] = useReducer(formStateReducer, !!initialFormState ? initialFormState : generateInitialFormState(formConfig));
  const [formOverrideState, setFormOverrideState] = useReducer(formStateReducer, !!initialFormOverrideState ? initialFormOverrideState : generateInitialFormOverrideState(formConfig));
  const [displayWaiverModal, setDisplayWaiverModal] = useState(false);
  const [waiverAccepted, setWaiverAccepted] = useState(false);
  const [submitInProgress, setSubmitInProgress] = useState(false);
  const [submitErrorTitle, setSubmitErrorTitle] = useState(null);
  const [submitErrorMessage, setSubmitErrorMessage] = useState(null);
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState(null);
  const [isValueChanged, setIsValueChanged] = useState(false);

  const submitForm = () => formSubmitCallback(formConfig, formState);

  useEffect(() => {
    if (!!submitOnAnyValue || (isValueChanged && submitOnValueChange)) {
      const fieldsWithNonNullValues = Object.keys(formState).filter((item) => typeof formState[item].value === "string" ? (!!formState[item].value && formState[item].value.trim().length > 0) : true);
      if (fieldsWithNonNullValues.length > 0) {
        submitForm();
      }
    }
  }, [formState, isValueChanged]);

  if (!formConfig) return null;

  const onValueChange = (config, e) => {
    const newValue = e?.target?.value;
    const {formValue, dataType} = config;
    const newValueToUse = !!newValue ? newValue === "" ? "" : dataType === "number" ? parseInt(newValue) : newValue : dataType === "firebaseAuthentication" ? e : "";
    setFormState({
      formValue,
      value: newValueToUse
    });
    setIsValueChanged(true);
  };

  const onOverrideValueChange = (config, e) => {
    const newValue = e?.target?.value;
    const {formValue, dataType, fillInOptionFormValueOverride, fillInOptionValues} = config;
    const newValueToUse = !!newValue ? newValue === "" ? "" : dataType === "number" ? parseInt(newValue) : newValue : dataType === "firebaseAuthentication" ? e : "";
    setFormOverrideState({
      formValue,
      formOverrideValue: fillInOptionFormValueOverride,
      options: fillInOptionValues,
      value: newValueToUse
    });
    setIsValueChanged(true);
  };

  const postFetch = () => {
    if (!!postEndpoint) {
      setSubmitInProgress(true);
      setSubmitSuccessMessage(null);
      setSubmitErrorMessage(null);
      setSubmitErrorTitle(null);
      let submitObj = {};
      formState.map((item) => {
        submitObj[item.formValue] = item.value;
      });

      formOverrideState.map((item) => {
        formState.map((item_2) => {
          if (item.formValue === item_2.formValue) {
            if (item.options.indexOf(item_2.value) > -1) {
              submitObj[item.formOverrideValue] = item.value;
            }
          }
        });
      });

      axios.post(postEndpoint, JSON.stringify(submitObj), reqHeaders).then((response) => {
        console.log(response);
        setSubmitInProgress(false);
        setSubmitSuccessMessage(`Successful!`);
      }, (error) => {
        console.log(error);
        setSubmitInProgress(false);
        setSubmitErrorTitle("Error Encountered");
        setSubmitErrorMessage("Oops! Something Went Wrong!");
      }).catch((e) => {
        console.log(e);
        setSubmitInProgress(false);
        setSubmitErrorTitle("Error Encountered");
        setSubmitErrorMessage("Oops! Something Went Wrong!");
      });
    }
  };

  const onSubmitCallback = (e) => {
    if (!!e?.preventDefault) {
      e.preventDefault();
    }
    if (!!postEndpoint) {
      postFetch();
    }
    submitForm();
  };

  const onFormResetClickCallback = () => {
    setFormFadeState(false);
    setTimeout(() => {
      setResetButtonFadeState(false);
      setTimeout(() => {
        window.location = window.location;
      }, 500);
    }, 500);
  };

  const requiredFields = formConfig.filter((item) => item.isRequired).map((item) => item.formValue);

  const submitButtonDisabledFields = requiredFields.filter((item) => {
    const matchingFormValue = formState.filter((item_2) => item_2.formValue === item).pop();
    if (!!matchingFormValue) {
      const formValue = matchingFormValue.formValue;
      const matchingFormDataType = formConfig.filter((item_2) => item_2.formValue === item).map((item_2) => item_2.dataType).pop();
      const valueToCheck = matchingFormValue.value;
      if (["text", "enum", "date", "tel", "buttonOptions"].indexOf(matchingFormDataType) > -1) {
        if (valueToCheck.trim().length > 0) {
          return false;
        }
      }
      if (matchingFormDataType === "email") {
        if (isValidEmail(valueToCheck)) {
          return false;
        }
      }
      if (matchingFormDataType === "number") {
        if (!isNaN(valueToCheck)) {
          return false;
        }
      }
      if (matchingFormDataType === "firebaseAuthentication") {
        if (!!valueToCheck && typeof valueToCheck === "object" && Object.keys(valueToCheck).length > 0) {
          return false;
        }
      }
    }
    return true;
  });

  const toggleWaiverModal = () => {
    if (displayWaiver) {
      setDisplayWaiverModal(!displayWaiverModal);
    }
  };

  const acceptWaiverCallback = () => {
    if (displayWaiver) {
      setWaiverAccepted(true);
      toggleWaiverModal();
    }
  };

  const isSubmitButtonDisabled = () => {
    if (submitButtonDisabledFields.length > 0) {
      return true;
    }
    if (displayWaiver) {
      if (!waiverAccepted) {
        return true;
      }
    }
    return false;
  };

  const isWarningMessageContainerEnabled = () => {
    if (displayWarnings) {
      if (!submitSuccessMessage) {
        if (submitButtonDisabledFields.length > 0) {
          return true;
        }
      }
      if (displayWaiver) {
        if (!waiverAccepted) {
          return true;
        }
      }
    }
    return false;
  };

  const blSubmitButtonDisabled = isSubmitButtonDisabled();
  const blShowWarningMessages = isWarningMessageContainerEnabled();

  return (
    <div>
      <Fade in={formFadeState}>
        <Form
          onSubmit={onSubmitCallback}
          style={{
            maxWidth: "500px",
            paddingLeft: "20px"
          }}
        >
          <fieldset
            disabled={!!submitSuccessMessage}
          >
            {
              formConfig.map((item, index) => {
                const {formValue} = item;
                const currentValue = !!formValue ? formState.filter((item_2) => !!item_2.formValue && item_2.formValue === formValue).map((item_2) => item_2.value).pop() : null;
                const currentOverrideValue = !!formValue ? formOverrideState.filter((item_2) => !!item_2.formValue && item_2.formValue === formValue).map((item_2) => item_2.value).pop() : null;
                return (
                  <RequiredWrapper
                    requiredConfig={requiredConfig}
                    config={item}
                    currentValue={currentValue}
                  >
                    <FormElementController
                      key={index}
                      appConfig={appConfig}
                      config={item}
                      currentValue={currentValue}
                      onValueChange={onValueChange}
                      onOverrideValueChange={onOverrideValueChange}
                      currentOverrideValue={currentOverrideValue}
                    />
                  </RequiredWrapper>
                );
              })
            }
            {
              !!submitErrorMessage &&
              <Alert
                color="danger"
              >
                {
                  !!submitErrorTitle &&
                  <h3>{`${submitErrorTitle}`}</h3>
                }
                {`${submitErrorMessage}`}
              </Alert>
            }
            {
              !!submitSuccessMessage &&
              <Alert
                color="success"
              >
                {`${submitSuccessMessage}`}
              </Alert>
            }
            {
              blShowWarningMessages &&
              <Alert
                color="warning"
              >
                <div>
                  <p>{`Required Fields Missing :`}</p>
                  <ul>
                    {
                      submitButtonDisabledFields.map((item, index) => {
                        const matchingFormLabel = formConfig.filter((item_2) => item === item_2.formValue).map((item_2) => item_2.formLabel).pop();
                        return (
                          <li
                            key={index}
                          >{`${!!matchingFormLabel ? matchingFormLabel : item}`}</li>
                        )
                      })
                    }
                  </ul>
                </div>
                {
                  displayWaiver && !waiverAccepted &&
                  <div>
                    <p>{`${!!waiverReviewAndAcceptRequestMessage ? waiverReviewAndAcceptRequestMessage : `Please review and accept waiver`}`}</p>
                    <Button
                      color={"primary"}
                      onClick={toggleWaiverModal}
                    >{`${!!waiverShowWaiverButtonText ? waiverShowWaiverButtonText : `Show Waiver`}`}</Button>
                  </div>
                }
              </Alert>
            }
            {
              displayWaiver && waiverAccepted &&
              <Alert
                color={"secondary"}
              >
                <p>{`${!!waiverWaiverAcceptedMessage ? waiverWaiverAcceptedMessage : `Waiver Accepted`}`}</p>
                <Button
                  color={"secondary"}
                  onClick={toggleWaiverModal}
                >{`${!!waiverShowWaiverButtonText ? waiverShowWaiverButtonText : `Show Waiver`}`}</Button>
              </Alert>
            }
            {
              submitInProgress &&
              <SpinnerWithMessage
                message={`Registering...`}
              />
            }
            {
              !submitOnValueChange && !submitSuccessMessage && !submitOnAnyValue &&
              <Button
                onClick={onSubmitCallback}
                disabled={blSubmitButtonDisabled || submitInProgress || !!submitSuccessMessage}
                color={blSubmitButtonDisabled ? "secondary" : "primary"}
              >Submit</Button>
            }
          </fieldset>
        </Form>
      </Fade>
      {
        !resetButtonFadeState && <Spinner/>
      }
      <Fade
        in={resetButtonFadeState}
      >
        {
          !!submitSuccessMessage &&
          <Button
            onClick={onFormResetClickCallback}
            color="primary"
          >Click to Register Another Student</Button>
        }
      </Fade>
      {
        displayWaiver && displayWaiverModal &&
        <ModalComponent
          submitModalCallback={acceptWaiverCallback}
          cancelModalCallback={toggleWaiverModal}
          modalTitle={`${!!waiverModalTitleText ? waiverModalTitleText : `Waiver`}`}
          submitButtonText={!waiverAccepted ? `${!!waiverAcceptButtonText ? waiverAcceptButtonText : `Accept`}` : null}
          cancelButtonText={!waiverAccepted ? `${!!waiverDeclineButtonText ? waiverDeclineButtonText : `Decline`}` : `${!!waiverCloseButtonText ? waiverCloseButtonText : `Close`}`}
        >
          <Waiver/>
        </ModalComponent>
      }
    </div>
  );
};

export default FormContainer;