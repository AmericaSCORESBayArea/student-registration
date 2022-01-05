import React, {useState,useReducer} from 'react';
import {nanoid} from "nanoid";
import {Button, FormGroup, Input,ButtonGroup} from 'reactstrap';
import FormLabel from "./Label";
import TextFormElement from "./Text";

const filterAllSelectText = "[All]";

const generateInitialEnumState = (availableFilterFields) => {
  let initialState = {};
  availableFilterFields.map((item) => initialState[item.enumValue] = item.enumItems[0]);
  return initialState;
};

const enumStateReducer = (state, newState) => {
  let updatedState = state;
  updatedState[newState.formValue] = newState.value;
  return updatedState;
};

const EnumerableElement = ({config,onValueChange,onOverrideValueChange,currentValue,currentOverrideValue,disabled}) => {

  const {
    dataType,
    formLabel,
    isRequired,
    formValue,
    helpText,
    selectText,
    enumItems,
    enableSubFiltering,
    filterFields,
    valueField,
    fillInOptionValues,
    fillInOptionFormValueOverride
  } = config;

  const availableFilterFields = enableSubFiltering && !!filterFields && Array.isArray(filterFields) && filterFields.length > 0 ? filterFields.map((item, index) => {
    const valuesForCurrentField = enumItems.filter((item_2) => !!item_2[item]).map((item_2) => item_2[item]).filter((item_2, index_2, arr_2) => arr_2.indexOf(item_2) === index_2);
    return {
      enumValue: item,
      enumItems: [
        filterAllSelectText,
        ...valuesForCurrentField
      ]
    };
  }) : [];

  const [enumState, setEnumState] = useReducer(enumStateReducer, generateInitialEnumState(availableFilterFields));
  const [isUpdating, setIsUpdating] = useState(false);

  const elementId = nanoid();

  const onFilterSelectValueChange = (filterValue, newValue) => {
    setIsUpdating(true);

    const currentValue = enumState[filterValue] ? enumState[filterValue] : null;

    setEnumState({
      formValue: filterValue,
      value: currentValue && currentValue === newValue ? filterAllSelectText : newValue
    });
    setTimeout(() => {
      setIsUpdating(false);
    }, 0);
  };

  const onSelectValueChange = (e) => {
    const newValue = e.target.value;
    if (newValue !== selectText) {
      onValueChange(e);
    } else {
      onValueChange({
        target: {
          value: ""
        }
      });
    }
  };

  const blDisplayOverrideElement = !!fillInOptionFormValueOverride && !!fillInOptionValues && Array.isArray(fillInOptionValues) && fillInOptionValues.length > 0 && fillInOptionValues.indexOf(currentValue) > -1;

  const overrideElementConfig = blDisplayOverrideElement ? {
    dataType:"text",
    formValue:fillInOptionFormValueOverride,
    formLabel:config.formLabel,
    placeholder:config.placeholder,
    isRequired:true
  } : {};

  const renderDropDown = (formValue, elementId, onSelectValueChange, enumItemsToUse) => {
    return (
      <div>
        <Input
          type="select"
          name={`${formValue}`}
          id={`${elementId}`}
          onChange={onSelectValueChange}
          disabled={disabled}
        >
          <option
            key={"empty"}
          >{`${selectText}`}</option>
          {
            enumItemsToUse.sort((a,b) => a > b ? 1 : -1).map((item, index) => {
              return (
                <option
                  key={index}
                >{`${item}`}</option>
              );
            })
          }
        </Input>
      </div>
    );
  };

  const renderFilterDropDownElement = (formValue, elementId, onSelectValueChange, enumItemsToUse) => {
    const currentFilterDropDownIndex = filterFields.indexOf(formValue);
    const parentFormValuesToConsiderForFilter = filterFields.filter((item, index) => index < currentFilterDropDownIndex);
    const itemsToDisplayBasedOnParentFilter = [
      ...enumItems.filter((item) => parentFormValuesToConsiderForFilter.filter((item_2) => {
        const currentFilterParentState = !!enumState[item_2] ? enumState[item_2] : null;
        return !currentFilterParentState || currentFilterParentState === filterAllSelectText || item[item_2] === currentFilterParentState;
      }).length === parentFormValuesToConsiderForFilter.length)
        .map((item) => item[formValue]).filter((item, index, arr) => arr.indexOf(item) === index)
    ];


    const currentValue = !!enumState[formValue] ? enumState[formValue] : enumItemsToUse[0];

    return (
      <ButtonGroup
        name={`${formValue}`}
        id={`${elementId}`}
        disabled={disabled}
      >
        {
          itemsToDisplayBasedOnParentFilter.map((item, index) => {
            return (
              <Button
                key={index}
                color={item === currentValue ? "primary" :"secondary"}
                onClick={onSelectValueChange.bind(this, formValue, item)}
              >{`${item}`}</Button>
            )
          })
        }
      </ButtonGroup>
    );
  };

  const renderFilterDropDown = () => {
    if (!filterFields || !valueField || !availableFilterFields || !Array.isArray(availableFilterFields) || availableFilterFields.length === 0) {
      return renderDropDown(formValue, elementId, onSelectValueChange, enumItems);
    }
    const valueFieldElementId = `${elementId}_filterField_value`;
    const valueFieldItems = [
      selectText,
      ...enumItems.filter((item) => filterFields.filter((item_2) => {
        const currentFilterParentState = !!enumState[item_2] ? enumState[item_2] : null;
        return !currentFilterParentState || currentFilterParentState === filterAllSelectText || item[item_2] === currentFilterParentState;
      }).length === filterFields.length)
        .map((item) => item[valueField]).filter((item, index, arr) => arr.indexOf(item) === index)
    ];

    return (
      <div>
        {
          availableFilterFields.map((item, index) => {
            const currentId = `${elementId}_filterField_${index}`;
            return (
              <div
                key={index}
              >
                <span>{`${item.enumValue}`}</span>
                {
                  !isUpdating && renderFilterDropDownElement(item.enumValue, currentId, onFilterSelectValueChange, item.enumItems)
                }
              </div>
            );
          })
        }
        <span>{`${valueField}`}</span>
        {
          renderDropDown(valueField, valueFieldElementId, onSelectValueChange, valueFieldItems)
        }
      </div>
    );
  };

  return (
    <FormGroup
      title={`${!!helpText ? helpText : ``}`}
    >
      <FormLabel
        config={config}
        elementId={elementId}
      />
      {
        !!enableSubFiltering ?
          <div
            className="card"
          >
            <div
              className="card-body"
            >
              {
                renderFilterDropDown()
              }
            </div>
          </div>
          :
          renderDropDown(formValue, elementId, onSelectValueChange, [
            selectText,
            ...enumItems
          ])
      }
      {
        blDisplayOverrideElement &&
        <TextFormElement
          config={overrideElementConfig}
          onValueChange={onOverrideValueChange}
          currentValue={currentOverrideValue}
          disabled={disabled}
        />
      }
    </FormGroup>
  );
};

export default EnumerableElement;