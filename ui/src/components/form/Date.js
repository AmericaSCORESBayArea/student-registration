import React, {useState, useEffect} from 'react';
import { nanoid } from "nanoid";
import {FormGroup, Input, Row, Col} from 'reactstrap';
import FormLabel from "./Label";

const DateFormElement = ({config,onValueChange,currentValue,disabled}) => {

  const [yearValue,setYearValue] = useState(null)
  const [monthValue,setMonthValue] = useState(null)
  const [dayValue,setDayValue] = useState(null)

  useEffect(() => {
    const dayValueInt = parseInt(dayValue)
    const monthValueInt = parseInt(monthValue)
    const yearValueInt = parseInt(yearValue)
    onValueChange([yearValueInt,monthValueInt,dayValueInt])
  },[yearValue,monthValue,dayValue])

  if (!config) return null;
  const {dataType, formValue, formLabel, helpText, placeholder, min, max, isRequired} = config;
  if (!dataType || !formValue) return null;
  const elementId = nanoid();

  const onMonthChange = (e) => setMonthValue(parseInt(e.target.value))
  const onDayChange = (e) => setDayValue(parseInt(e.target.value))
  const onYearChange = (e) => setYearValue(parseInt(e.target.value))

  return (
    <FormGroup
      title={`${!!helpText ? helpText : ``}`}
    >
      <FormLabel
        config={config}
        elementId={`${elementId}`}
      />
      <Row>
        <Col xs={3}>
          <span>Month</span>
          <Input
            type="text"
            onChange={onMonthChange}
          />
        </Col>
        <Col xs={1}>
          <span>{`/`}</span>
        </Col>
        <Col xs={3}>
          <span>Day</span>
          <Input
            type="text"
            onChange={onDayChange}
          />
        </Col>
        <Col xs={1}>
          <span>{`/`}</span>
        </Col>
        <Col xs={4}>
          <span>Year</span>
          <Input
            type="text"
            onChange={onYearChange}
          />
        </Col>
      </Row>
    </FormGroup>
  );
};

export default DateFormElement;