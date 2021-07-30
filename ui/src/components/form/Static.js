import React from 'react';
import {nanoid} from "nanoid";
import {FormGroup} from 'reactstrap';
import FormLabel from "./Label";

const StaticElement = ({config,currentValue}) => {

  if (!config) return null;
  const {dataType, formValue} = config;
  if (!dataType || !formValue) return null;
  const elementId = nanoid();

  return (
    <FormGroup>
      <FormLabel
        config={config}
        elementId={elementId}
      />
      <p>{`${currentValue}`}</p>
    </FormGroup>
  );
};

export default StaticElement;