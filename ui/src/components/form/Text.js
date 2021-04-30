import React from 'react';
import {nanoid} from "nanoid";
import {FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
import FormLabel from "./Label";
import isValidEmail from "../../modules/isValidEmail";

const TextFormElement = ({config,onValueChange,currentValue}) => {

  if (!config) return null;
  const {dataType, formValue, formLabel, helpText, placeholder, min, max, isRequired} = config;
  if (!dataType || !formValue) return null;
  const elementId = nanoid();

  return (
    <FormGroup
      title={`${!!helpText ? helpText : ``}`}
    >
      <FormLabel
        config={config}
        elementId={elementId}
      />
      <Input
        id={`${elementId}`}
        type={`${dataType}`}
        name={`${formValue}`}
        placeholder={`${!!placeholder ? placeholder : !!formLabel ? formLabel : formValue}`}
        value={!!currentValue ? currentValue : ""}
        onChange={onValueChange}
        min={!!min ? min : ""}
        max={!!max ? max : ""}
      />
      {
        dataType === "email" &&
        !isValidEmail(currentValue) && (isRequired || (!isRequired && currentValue.length > 0)) &&
        <Alert
          color={"warning"}
        >{`Please enter a valid email address`}</Alert>
      }
    </FormGroup>
  );
};

export default TextFormElement;