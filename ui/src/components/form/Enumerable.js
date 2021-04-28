import React from 'react';
import {nanoid} from "nanoid";
import {FormGroup,Input } from 'reactstrap';
import FormLabel from "./Label";

const defaultSelectText = "Select..."

const EnumerableElement = ({config,onValueChange}) => {

  if (!config) return null;
  const {formValue, helpText, enumItems} = config;
  if (!formValue || !enumItems) return null;
  const elementId = nanoid();

  const onSelectValueChange = (e) => {
    const newValue = e.target.value;
    if (newValue !== defaultSelectText) {
      onValueChange(e);
    } else {
      onValueChange({
        target:{
          value:""
        }
      });
    }
  };

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
        onChange={onSelectValueChange}
      >
        {
          <option
            key={"default_select_text"}
          >{`${defaultSelectText}`}</option>
        }
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