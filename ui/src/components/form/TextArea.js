import React from 'react';
import {nanoid} from "nanoid";
import {FormGroup, Input} from 'reactstrap';
import FormLabel from "./Label";

const TextFormElement = ({config,onValueChange,currentValue}) => {

  if (!config) return null;
  const {dataType, formValue, formLabel, helpText, placeholder, min, max} = config;
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
        type={`textarea`}
        name={`${formValue}`}
        placeholder={`${!!placeholder ? placeholder : !!formLabel ? formLabel : formValue}`}
        value={!!currentValue ? currentValue : ""}
        onChange={onValueChange}
      />
    </FormGroup>
  );
};

export default TextFormElement;