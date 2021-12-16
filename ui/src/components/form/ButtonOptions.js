import React from 'react';
import {nanoid} from "nanoid";
import {Button, ButtonGroup, Card, CardBody, FormGroup, Row, Col} from 'reactstrap';
import FormLabel from "./Label";

const ButtonOptionsElement = ({config,onValueChange,currentValue,disabled}) => {

  const {
    formValue,
    helpText,
    buttonOrientation,
    buttonItems,
    size,
  } = config;

  const buttonDisplayValues = buttonItems.map((item) => typeof item === "object" ? !!item.displayValue ? item.displayValue : null : item).filter((item) => !!item);
  const buttonValues = buttonItems.map((item) => typeof item === "object" ? !!item.value ? item.value : null : item).filter((item) => !!item);
  const buttonImages = buttonItems.map((item) => typeof item === "object" ? !!item.image ? item.image : null : item).filter((item) => !!item);

  const indexOfCurrentValueMatch = buttonValues.indexOf(currentValue);
  const currentDisplayValue = buttonValues.length > 0 && buttonValues.length === buttonDisplayValues.length && buttonValues.length > indexOfCurrentValueMatch ? buttonDisplayValues[indexOfCurrentValueMatch] : currentValue

  const elementId = nanoid();
  const onButtonItemClick = (buttonValue) => {
    if (!disabled) {
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
        id={`${elementId}`}
        name={`${formValue}`}
        vertical={buttonOrientation && buttonOrientation === "vertical"}
      >
        {
          buttonDisplayValues.map((item, index) => {
            return buttonImages.length === buttonDisplayValues.length && buttonImages.length > index ?
              <Card
                key={index}
                color={!!currentDisplayValue && item === currentDisplayValue ? "primary" : "secondary"}
                onClick={onButtonItemClick.bind(this, item)}
              >
                <CardBody>
                  <Row className="text-center">
                    <Col xs={12}>
                      <Button
                        size={!!size ? size : "lg"}
                        color={!!currentDisplayValue && item === currentDisplayValue ? "primary" : "secondary"}
                        onClick={onButtonItemClick.bind(this, item)}
                        disabled={disabled}
                      >{`${item}`}</Button>
                    </Col>
                    <Col xs={12}>
                      <img
                        src={`/${buttonImages[index]}`}
                        style={{
                          width: "100%",
                          maxHeight: "500px"
                        }}
                        alt={`${formValue} Image of ${buttonImages[index]}`}/>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              :
              <Button
                key={index}
                size={!!size ? size : "lg"}
                color={!!currentDisplayValue && item === currentDisplayValue ? "primary" : "secondary"}
                onClick={onButtonItemClick.bind(this, item)}
                disabled={disabled}
              >{`${item}`}</Button>
          })
        }
      </ButtonGroup>
    </FormGroup>
  );
};

export default ButtonOptionsElement;