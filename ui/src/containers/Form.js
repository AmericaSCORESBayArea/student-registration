import React, {useReducer} from 'react';
import { Button,Form } from 'reactstrap';

import formConfig from '../formConfig';
import FormElementController from "../components/form/_controller";

const FormContainer  = () => {

  const formStateReducer = (state,newState) => {
    return [
      ...state.filter((item) => item.formValue !== newState.formValue),
      newState
    ];
  };

  const [formState,setFormState] = useReducer(formStateReducer,[]);

  const onValueChange = (config,e) => {
    const newValue = e.target.value;
    const {formValue} = config;
    setFormState({
      formValue,
      value:newValue
    });
  };

  const onSubmitCallback = (e) => {
    e.preventDefault();
    console.log("submit here");
  };

  return (
    <Form
      onSubmit={onSubmitCallback}
      style={{maxWidth:"500px"}}
    >
      {
        formConfig.map((item,index) => {
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
      <Button
        onClick={onSubmitCallback}
      >Submit</Button>
    </Form>
  );
};

export default FormContainer;