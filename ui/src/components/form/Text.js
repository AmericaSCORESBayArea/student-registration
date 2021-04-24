import React from 'react';
import {nanoid} from "nanoid";
import {FormGroup,Label,Input,FormText } from 'reactstrap';
import FormLabel from "./Label";

const TextFormElement = ({config,onValueChange,currentValue}) => {

  if (!config) return null;
  const {dataType, formValue, formLabel, helpText, placeholder,min,max} = config;
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
    </FormGroup>
  );
};

export default TextFormElement;