import React from 'react';
import {Label} from 'reactstrap';

const FormLabel = ({config,elementId}) => {
  if (!config || !elementId) return null;
  const {formValue, formLabel,isRequired} = config;
  const labelToDisplay = `${!!formLabel ? formLabel : !!formValue ? formValue : ""}`;
  return (
      <Label
        for={`${elementId}`}
      >{labelToDisplay}{isRequired && <span className="red-req">*</span>}</Label>
  );
};

export default FormLabel;