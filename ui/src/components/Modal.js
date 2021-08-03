import React from 'react';
import {Button,Modal, ModalBody,ModalHeader,ModalFooter} from "reactstrap";

const ModalComponent = ({submitModalCallback,cancelModalCallback,modalTitle,submitButtonText,cancelButtonText,children}) => {
  return (
    <Modal
      style={{maxWidth: "1000px", width: "100%"}}
      isOpen={true}
      toggle={cancelModalCallback}
    >
      <ModalHeader
        toggle={cancelModalCallback}
      >{`${modalTitle}`}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        {
          !!submitButtonText &&
          <Button
            color="primary"
            onClick={!!submitModalCallback ? submitModalCallback : null}
          >{`${submitButtonText}`}</Button>
        }
        {` `}
        {
          !!cancelButtonText &&
          <Button
            color="secondary"
            onClick={!!cancelModalCallback ? cancelModalCallback : null}
          >{`${cancelButtonText}`}</Button>
        }
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent;