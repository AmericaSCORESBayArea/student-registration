import React from 'react';
import {nanoid} from "nanoid";
import {Button, ButtonGroup, FormGroup} from 'reactstrap';
import FormLabel from "./Label";

const ButtonOptionsElement = ({config,onValueChange,currentValue}) => {

  const {
    formValue,
    helpText,
    buttonItems
  } = config;

  const elementId = nanoid();
  const onButtonItemClick = (buttonValue) => {
    onValueChange(
      {
        target: {
          value: buttonValue
        }
      }
    );
  };

  return (
    <FormGroup
      title={`${!!helpText ? helpText : ``}`}
    >
      <div>
        <FormLabel
          config={config}
          elementId={elementId}
        />
      </div>
      <ButtonGroup
        name={`${formValue}`}
        id={`${elementId}`}
      >
        {
          buttonItems.map((item, index) => {
            return (
              <Button
                key={index}
                size={"lg"}
                color={!!currentValue && item === currentValue ? "primary" : "secondary"}
                onClick={onButtonItemClick.bind(this, item)}
              >{`${item}`}</Button>
            );
          })
        }
      </ButtonGroup>
    </FormGroup>
  );
};

export default ButtonOptionsElement;