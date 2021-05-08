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

  const buttonDisplayValues = buttonItems.map((item) => typeof item === "object" ? !!item.displayValue ? item.displayValue : null : item).filter((item) => !!item);
  const buttonValues = buttonItems.map((item) => typeof item === "object" ? !!item.value ? item.value : null : item).filter((item) => !!item);

  const indexOfCurrentValueMatch = buttonValues.indexOf(currentValue);
  const currentDisplayValue = buttonValues.length > 0 && buttonValues.length === buttonDisplayValues.length && buttonValues.length > indexOfCurrentValueMatch ? buttonDisplayValues[indexOfCurrentValueMatch] : currentValue

  const elementId = nanoid();
  const onButtonItemClick = (buttonValue) => {
    const indexOfMatch = buttonDisplayValues.indexOf(buttonValue);
    const valueToPass = buttonValues.length > 0 && buttonValues.length === buttonDisplayValues.length && buttonValues.length > indexOfMatch ? buttonValues[indexOfMatch] : buttonValue;
    if (indexOfMatch > -1) {
      onValueChange(
        {
          target: {
            value: valueToPass
          }
        }
      );
    }
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
          buttonDisplayValues.map((item, index) => {
            return (
              <Button
                key={index}
                size={"lg"}
                color={!!currentDisplayValue && item === currentDisplayValue ? "primary" : "secondary"}
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