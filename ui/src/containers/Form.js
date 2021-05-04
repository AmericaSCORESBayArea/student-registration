import React, {useState,useReducer} from 'react';
import axios from 'axios';
import { Button, Form, Alert, Spinner, Fade } from 'reactstrap';

import FormElementController from "../components/form/_controller";
import SpinnerWithMessage from "../components/Spinner";
import ModalComponent from "../components/Modal";
import Waiver from "../components/Waiver";
import isValidEmail from "../modules/isValidEmail";

const reqHeaders = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const generateInitialFormState = (formConfig) => {
  if (!formConfig) return [];
  return formConfig.filter((item) => !!item.formValue).map((item) => {
    const {formValue,dataType} = item;
    return {
      formValue,
      value:dataType === "number" ? 0 : ""
    };
  });
};

const FormContainer  = ({formConfig}) => {

  const formStateReducer = (state, newState) => {
    return [
      ...state.filter((item) => item.formValue !== newState.formValue),
      newState
    ];
  };

  const [formFadeState, setFormFadeState] = useState(true)
  const [resetButtonFadeState, setResetButtonFadeState] = useState(true)
  const [formState, setFormState] = useReducer(formStateReducer, generateInitialFormState(formConfig));
  const [displayWaiverModal, setDisplayWaiverModal] = useState(false);
  const [waiverAccepted, setWaiverAccepted] = useState(false);
  const [submitInProgress, setSubmitInProgress] = useState(false);
  const [submitErrorTitle, setSubmitErrorTitle] = useState(null);
  const [submitErrorMessage, setSubmitErrorMessage] = useState(null);
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState(null);

  if (!formConfig) return null;

  const onValueChange = (config, e) => {
    const newValue = e.target.value;
    const {formValue, dataType} = config;
    setFormState({
      formValue,
      value: dataType === "number" ? parseInt(newValue) : newValue
    });
  };

  const postFetch = () => {
    setSubmitInProgress(true);
    setSubmitSuccessMessage(null);
    setSubmitErrorMessage(null);
    setSubmitErrorTitle(null);
    let submitObj = {};
    formState.map((item) => {
      submitObj[item.formValue] = item.value;
    });
    axios.post('/register', JSON.stringify(submitObj), reqHeaders).then((response) => {
      setSubmitInProgress(false);
      setSubmitSuccessMessage(`Student Registration Successful!`);
    }, (error) => {
      setSubmitInProgress(false);
      setSubmitErrorTitle("Student Registration Failed");
      setSubmitErrorMessage("Oops! Something Went Wrong in Registering the Student");
    }).catch((e) => {
      setSubmitInProgress(false);
      setSubmitErrorTitle("Student Registration Failed");
      setSubmitErrorMessage("Oops! Something Went Wrong in Registering the Student");
    });
  };

  const onSubmitCallback = (e) => {
    e.preventDefault();
    postFetch();
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
      if (["text","enum","date","tel"].indexOf(matchingFormDataType) > -1 ) {
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
    }
    return true;
  });

  const toggleWaiverModal = () => setDisplayWaiverModal(!displayWaiverModal);
  const acceptWaiverCallback = () => {
    setWaiverAccepted(true);
    toggleWaiverModal();
  };

  const blSubmitButtonDisabled = submitButtonDisabledFields.length > 0 || !waiverAccepted;
  const blShowWarningMessages = (!submitSuccessMessage && !!submitButtonDisabledFields.length > 0) || !waiverAccepted;

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
                return (
                  <FormElementController
                    key={index}
                    config={item}
                    currentValue={currentValue}
                    onValueChange={onValueChange}
                  />
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
                  !waiverAccepted &&
                  <div>
                    <p>{`Please review and accept waiver : `}</p>
                    <Button
                      color={"primary"}
                      onClick={toggleWaiverModal}
                    >Show Waiver</Button>
                  </div>
                }
              </Alert>
            }
            {
              waiverAccepted &&
              <Alert
                color={"secondary"}
              >
                <p>Waiver Accepted</p>
                <Button
                  color={"secondary"}
                  onClick={toggleWaiverModal}
                >Show Waiver</Button>
              </Alert>
            }
            {
              submitInProgress &&
              <SpinnerWithMessage
                message={`Registering...`}
              />
            }
            {
              !submitSuccessMessage &&
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
        displayWaiverModal &&
        <ModalComponent
          submitModalCallback={acceptWaiverCallback}
          cancelModalCallback={toggleWaiverModal}
          modalTitle={"Waiver"}
          submitButtonText={!waiverAccepted ? "Accept" : null}
          cancelButtonText={!waiverAccepted ? "Decline" : "Close"}
        >
          <Waiver/>
        </ModalComponent>
      }
    </div>
  );
};

export default FormContainer;