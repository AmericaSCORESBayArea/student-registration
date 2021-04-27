import React from 'react';
import StringFormElement from "./Text";
import TextAreaFormElement from "./TextArea";
import TitleFormElement from "./Title";
import EnumerableElement from "./Enumerable";

const FormElementController = ({config,onValueChange,currentValue}) => {
  if (!config) return null;
  const {dataType} = config;
  if (!dataType) return null;
  return dataType === "title" ?
    <TitleFormElement
      config={config}
    />
    :
    dataType === "text" || dataType === "number" || dataType === "email" || dataType === "tel"  || dataType === "date" ?
      <StringFormElement
        config={config}
        onValueChange={onValueChange.bind(this, config)}
        currentValue={currentValue}
      />
    :
    dataType === "textArea"?
      <TextAreaFormElement
        config={config}
        onValueChange={onValueChange.bind(this, config)}
        currentValue={currentValue}
      />
      :
      dataType === "enum" ?
        <EnumerableElement
          config={config}
          onValueChange={onValueChange.bind(this, config)}
          currentValue={currentValue}
        />
        : null
};

export default FormElementController;