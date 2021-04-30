import React from 'react';
import {nanoid} from "nanoid";
import {FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
import FormLabel from "./Label";
import isValidPhone from "../../modules/isValidPhone";
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
        ["text","enum","date"].indexOf(dataType) > -1 && isRequired &&
        currentValue.trim().length === 0 &&
        <Alert
          color={"warning"}
        >{`Please enter a valid value for ${formLabel}`}</Alert>
      }
      {
        dataType === "tel" &&
        !isValidPhone(currentValue) && (isRequired || (!isRequired && currentValue.length > 0)) &&
        <Alert
          color={"warning"}
        >{`Please enter a valid value for ${formLabel}`}</Alert>
      }
      {
        dataType === "number" && isRequired &&
        isNaN(currentValue) &&
        <Alert
          color={"warning"}
        >{`Please enter a valid value for ${formLabel}`}</Alert>
      }
      {
        dataType === "email" &&
        !isValidEmail(currentValue) && (isRequired || (!isRequired && currentValue.length > 0)) &&
        <Alert
          color={"warning"}
        >{`Please enter a valid ${formLabel}`}</Alert>
      }
    </FormGroup>
  );
};

export default TextFormElement;