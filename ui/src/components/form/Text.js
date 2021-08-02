import React from 'react';
import {nanoid} from "nanoid";
import {FormGroup, Input} from 'reactstrap';
import FormLabel from "./Label";

const TextFormElement = ({config,onValueChange,currentValue,disabled}) => {

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
        disabled={disabled}
      />
    </FormGroup>
  );
};

export default TextFormElement;