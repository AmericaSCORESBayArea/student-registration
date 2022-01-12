import React from 'react';
import TextFormElement from "./Text";
import DateFormElement from "./Date";
import TextAreaFormElement from "./TextArea";
import TitleFormElement from "./Title";
import EnumerableElement from "./Enumerable";
import ButtonOptionsElement from "./ButtonOptions";
import StaticElement from "./Static";
import FirebaseAuthContainer from "../../containers/FirebaseAuth";

const FormElementController = ({appConfig,config,onValueChange,onOverrideValueChange,currentValue,currentOverrideValue,disabled}) => {
  if (!config) return null;
  const {dataType} = config;
  if (!dataType) return null;
  return dataType === "title" ?
    <TitleFormElement
      config={config}
    />
    :
    dataType === "text" || dataType === "number" || dataType === "email" || dataType === "tel" ?
      <TextFormElement
        config={config}
        onValueChange={onValueChange.bind(this, config)}
        currentValue={currentValue}
        disabled={disabled}
      /> :
      dataType === "date" ?
        <DateFormElement
          config={config}
          onValueChange={onValueChange.bind(this, config)}
          currentValue={currentValue}
          disabled={disabled}
        /> :
        dataType === "textArea" ?
          <TextAreaFormElement
            config={config}
            onValueChange={onValueChange.bind(this, config)}
            currentValue={currentValue}
            disabled={disabled}
          />
          :
          dataType === "enum" ?
            <EnumerableElement
              config={config}
              onValueChange={onValueChange.bind(this, config)}
              onOverrideValueChange={onOverrideValueChange.bind(this, config)}
              currentValue={currentValue}
              currentOverrideValue={currentOverrideValue}
              disabled={disabled}
            />
            :
            dataType === "buttonOptions" ?
              <ButtonOptionsElement
                config={config}
                onValueChange={onValueChange.bind(this, config)}
                currentValue={currentValue}
                disabled={disabled}
              />
              :
              dataType === "firebaseAuthentication" ?
                <FirebaseAuthContainer
                  appConfig={appConfig}
                  config={config}
                  onValueChange={onValueChange.bind(this, config)}
                  currentValue={currentValue}
                />
                :
                dataType === "static" ?
                  <StaticElement
                    config={config}
                    currentValue={currentValue}
                  />
                  :
                  null
};

export default FormElementController;