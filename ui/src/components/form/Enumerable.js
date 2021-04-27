import React from 'react';
import {nanoid} from "nanoid";
import {FormGroup,Input } from 'reactstrap';
import FormLabel from "./Label";

const EnumerableElement = ({config,onValueChange}) => {

  if (!config) return null;
  const {formValue, helpText, enumItems} = config;
  if (!formValue || !enumItems) return null;
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
        type="select"
        name={`${formValue}`}
        id={`${elementId}`}
        onChange={onValueChange}
      >
        {
          enumItems.map((item,index) => {
            return (
              <option
                key={index}
              >{`${item}`}</option>
            );
          })
        }
      </Input>
    </FormGroup>
  );
};

export default EnumerableElement;