import React from 'react';

const TitleFormElement = ({config}) => {
  if (!config) return null;
  const {formLabel} = config;
  if (!formLabel) return null;
  return (
    <h2>{`${formLabel}`}</h2>
  );
};

export default TitleFormElement;