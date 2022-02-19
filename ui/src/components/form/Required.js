import React from 'react';
import {Alert} from 'reactstrap';
import isValidPhone from "../../modules/isValidPhone";
import isValidEmail from "../../modules/isValidEmail";
import isValidDate from "../../modules/isValidDate";

const RequiredWrapper = ({currentValue, config,children,requiredConfig}) => {
  const {isRequired, dataType} = config;
  const blValidValue = isRequired ? currentValue ?
    dataType === "tel" ?
      isValidPhone(currentValue) :
      dataType === "email" ?
        isValidEmail(currentValue) :
        dataType === "number" ?
          !isNaN(currentValue) :
        dataType === "date"  ?
          isValidDate(currentValue) :
          ["textArea", "text", "enum"].indexOf(dataType) > -1 ?
            currentValue.trim().length > 0 : true : false : true;

  if (["title","firebaseAuthentication"].indexOf(dataType) > -1) {
    return children;
  }

  return (
    <Alert
      color={blValidValue ? "secondary" : "warning"}
    >
      {
        !blValidValue && `${currentValue}`.trim().length > 0 &&
        `${requiredConfig.validText} ${requiredConfig[dataType]} ${requiredConfig.requiredText}`
      }
      {
        children
      }
    </Alert>
  )
};

export default RequiredWrapper;