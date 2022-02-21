import React, {useState, useEffect} from 'react';
import { nanoid } from "nanoid";
import {FormGroup, Input, Row, Col} from 'reactstrap';
import FormLabel from "./Label";

const DateFormElement = ({config,onValueChange,currentValue,disabled}) => {

  const [initialized,setInitialized] = useState(false)
  const [yearValue,setYearValue] = useState(null)
  const [monthValue,setMonthValue] = useState(null)
  const [dayValue,setDayValue] = useState(null)

  useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      if (Array.isArray(currentValue) && currentValue.length === 3) {
        setYearValue(currentValue[0])
        setMonthValue(currentValue[1])
        setDayValue(currentValue[2])
      }
    }
  },[currentValue])

  useEffect(() => {
    const dayValueInt = parseInt(dayValue)
    const monthValueInt = parseInt(monthValue)
    const yearValueInt = parseInt(yearValue)
    onValueChange([yearValueInt,monthValueInt,dayValueInt])
  },[yearValue,monthValue,dayValue])

  if (!config) return null;
  const {dataType, formValue, formLabel, helpText, placeholder, min, max, isRequired, yearLabel, monthLabel, dayLabel} = config;
  if (!dataType || !formValue) return null;
  const elementId = nanoid();

  const onMonthChange = (e) => setMonthValue(parseInt(e.target.value))
  const onDayChange = (e) => setDayValue(parseInt(e.target.value))
  const onYearChange = (e) => setYearValue(parseInt(e.target.value))

  return (
    <FormGroup
      title={`${!!helpText ? helpText : ``}`}
      disabled={disabled}
    >
      <FormLabel
        config={config}
        elementId={`${elementId}`}
      />
      <Row>
        <Col xs={3}>
          <span>{`${monthLabel ? monthLabel : 'Month'}`}</span>
          <Input
            type="text"
            onChange={onMonthChange}
            value={monthValue}
          />
        </Col>
        <Col xs={1}>
          <span>{`/`}</span>
        </Col>
        <Col xs={3}>
          <span>{`${dayLabel ? dayLabel : 'Day'}`}</span>
          <Input
            type="text"
            onChange={onDayChange}
            value={dayValue}
          />
        </Col>
        <Col xs={1}>
          <span>{`/`}</span>
        </Col>
        <Col xs={4}>
          <span>{`${yearLabel ? yearLabel : 'Year'}`}</span>
          <Input
            type="text"
            onChange={onYearChange}
            value={yearValue}
          />
        </Col>
      </Row>
    </FormGroup>
  );
};

export default DateFormElement;