import React, {useState,useReducer} from 'react';
import axios from 'axios';
import { Button,Form,Alert } from 'reactstrap';

import formConfig from '../formConfig';
import FormElementController from "../components/form/_controller";

const FormContainer  = () => {

  const formStateReducer = (state, newState) => {
    return [
      ...state.filter((item) => item.formValue !== newState.formValue),
      newState
    ];
  };

  const [formState, setFormState] = useReducer(formStateReducer, []);
  const [submitErrorTitle, setSubmitErrorTitle] = useState(null);
  const [submitErrorMessage, setSubmitErrorMessage] = useState(null);

  const onValueChange = (config, e) => {
    const newValue = e.target.value;
    const {formValue} = config;
    setFormState({
      formValue,
      value: newValue
    });
  };

  /* POST using the fetch call */
  const postFetch = () => {
    // // let order = formData();
    // console.log(order);
    console.log("SPACES");
    console.log(JSON.stringify(formState));
    const reqHeaders = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    submitErrorTitle(null);
    submitErrorMessage(null);
    axios.post('/register', JSON.stringify(formState), reqHeaders)
      .then((response) => {
        console.log('success repsonse', response.data);
        if (response.data !== undefined) {
          if (response.data.data === true) {

            console.log("RESULT LOOKS OK!");

            // $( "#dialog-confirm" ).dialog({
            //   resizable: false,
            //   height: "auto",
            //   width: 400,
            //   modal: true,
            //   buttons: {
            //     "Register New Student": function() {
            //       $( this ).dialog( "close" );
            //       resetFields();
            //     },
            //     "Goto Scores Home": function() {
            //       window.location.href = "https://scoresu.org/";
            //     }
            //   }
            // });
          } else {
            setSubmitErrorTitle("Student Registration Failed");
            setSubmitErrorMessage("Oops! Something Went Wrong in Registering the Student");
          }
        } else {
          setSubmitErrorTitle("Student Registration Failed");
          setSubmitErrorMessage("Oops! Something Went Wrong in Registering the Student");
        }
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
        paddingLeft:"20px"
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
      <Button
        onClick={onSubmitCallback}
      >Submit</Button>
    </Form>
  );
};

export default FormContainer;