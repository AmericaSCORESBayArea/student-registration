import React, {useState,useReducer} from 'react';
import axios from 'axios';
import { Button,Form,Alert } from 'reactstrap';

import formConfig from '../formConfig';
import FormElementController from "../components/form/_controller";

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

const FormContainer  = () => {

  const formStateReducer = (state, newState) => {
    return [
      ...state.filter((item) => item.formValue !== newState.formValue),
      newState
    ];
  };

  const [formState, setFormState] = useReducer(formStateReducer, generateInitialFormState(formConfig));
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
    setSubmitSuccessMessage(null);
    setSubmitErrorMessage(null);
    setSubmitErrorTitle(null);
    let submitObj = {};
    console.log(formState);
    formState.map((item) => {
      submitObj[item.formValue] = item.value;
    });
    console.log(submitObj);
    axios.post('/register', JSON.stringify(submitObj), reqHeaders).then((response) => {
      console.log(response);
      setSubmitSuccessMessage(`Student Registration Successful!`);
    }, (error) => {
      console.log(error);
      setSubmitErrorTitle("Student Registration Failed");
      setSubmitErrorMessage("Oops! Something Went Wrong in Registering the Student");
    }).catch((e) => {
      console.log(e);
      setSubmitErrorTitle("Student Registration Failed");
      setSubmitErrorMessage("Oops! Something Went Wrong in Registering the Student");
    });
  };

  const onSubmitCallback = (e) => {
    e.preventDefault();
    console.log("submit here");
    console.log(formState);
    console.log("existing submit-----");
    postFetch();
  };

  return (
    <Form
      onSubmit={onSubmitCallback}
      style={{
        maxWidth: "500px",
        paddingLeft: "20px"
      }}
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
      <Button
        onClick={onSubmitCallback}
      >Submit</Button>
    </Form>
  );
};

export default FormContainer;