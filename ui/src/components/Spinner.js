import React from 'react';
import {Spinner} from 'reactstrap';

const SpinnerWithMessage = ({message}) => {
  return (
    <span>
      <Spinner size="sm" color="primary">{` `}</Spinner>
      <span>{` ${!!message ? message : ""}`}</span>
    </span>
  );
};

export default SpinnerWithMessage;