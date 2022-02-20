import React, {useEffect, useState} from 'react';
import "firebase/compat/auth";
import SpinnerWithMessage from "../components/Spinner";
import { getAuth } from "firebase/auth";
import axios from "axios";
import {API_URL} from "./Config";
import {Button, Card, Row, Col, Collapse, Table, Container, Modal, ModalHeader} from "reactstrap";
import FormContainer from "./Form";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencil}  from  "@fortawesome/free-solid-svg-icons"

const hiddenKeys = ["Id", "SchoolSiteId", "Name"]

const generateFormStateFromObj = (regObj) => {
  let initState = []
  if(regObj) {
    Object.keys(regObj).map((item) => {
      initState.push({
        formValue:item,
        value:regObj[item]
      })
    })
  }
  return initState
}

const PreviousDetailedContent = ({content,contentIndex,onEditClick}) => {
  const [isOpen, setIsOpen] = useState(false)
  const displayKeys = Object.keys(content).filter((item) => hiddenKeys.indexOf(item) === -1)
  return (
    <Card>
      <Row>
        <p/>
        <Col>
          <small style={{paddingRight:"10px",paddingLeft:"10px"}}>{`[${contentIndex + 1}]`}</small>
          <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? `Close` : `View`}</Button>
          <small style={{paddingLeft:"10px"}}>{`${content.FirstName} ${content.LastName}`}</small>
        </Col>
        <p/>
      </Row>
      <Collapse
        isOpen={isOpen}
      >
        <Container>
          <Row>
            <Col>
              <p/>
                <small style={{paddingLeft:"10px"}}>Click on a pencil icon next to a value to modify</small>
              <p/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped={true}>
                <tbody>
                  {
                    displayKeys.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td key={"key"}><b>{`${item}`}</b></td>
                          <td key={"value"}>{`${content[item]}`}</td>
                          <td key={"edit"}>
                            <Button
                                color={"default"}
                                onClick={() => onEditClick(contentIndex)}
                            ><FontAwesomeIcon icon={faPencil} /></Button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table></Col>
          </Row>
        </Container>
      </Collapse>
    </Card>
  )
}

const SearchWithNewContainer  = ({appConfig,requiredConfig,config,onValueChange,currentValue}) => {
  const {editFormConfig} = config;
  const [loading, setLoading] = useState(false)
  const [displayNewModal, setDisplayNewModal] = useState(false)
  const [displayConfirmCancel, setDisplayConfirmCancel] = useState(false)
  const [previousRegistrations, setPreviousRegistrations] = useState([])
  const [editingContentIndex, setEditingContentIndex] = useState(-1)

  useEffect(() => {
    const auth = getAuth();
    if (auth) {
      const {currentUser} = auth
      if (currentUser) {
        const {phoneNumber} = currentUser
        if (phoneNumber) {
          setLoading(true)
          axios.post(`${API_URL}/search`, JSON.stringify({phoneNumber}), {headers: {'Content-Type': 'application/json'}}).then((response) => {
            const {data} = response;
            setPreviousRegistrations(data)
            setLoading(false)
          })
        }
      }
    }
  }, [])

  if (loading)
    return (
      <SpinnerWithMessage
        message={`Loading...`}
      />
    )

  const confirmCancel = () => setDisplayConfirmCancel(true)

  return (
    <Container>
      <Row>
        <Col>
          <Button
            size={"lg"}
            color={"primary"}
            onClick={() => setDisplayNewModal(!displayNewModal)}
          >New</Button>
          <small style={{paddingLeft:"10px"}}>Click to register a new student</small>
        </Col>
      </Row>
      <p/>
      {
        previousRegistrations && previousRegistrations.length > 0 &&
        <Row>
          <Col>
            <p><b>{`${previousRegistrations.length}`}</b> previous registration(s) were found associated with your phone number</p>
            <small>Click View more details and to edit the information for an existing registration.</small>
            {
              previousRegistrations.map((item, index) =>
                <PreviousDetailedContent
                  key={index}
                  content={item}
                  contentIndex={index}
                  onEditClick={(contentIndex) => setEditingContentIndex(contentIndex)}
                />
              )
            }
          </Col>
        </Row>
      }
      <Modal
        isOpen={displayNewModal}
        size={"lg"}
      >
        <p/>
        <Container style={{width:"100%"}}>
          <Row>
            <Col xs={12} sm={9}>
              <h3>New Registration</h3>
            </Col>
            <Col xs={12} sm={3} style={{textAlign: "right"}}>
              <Button
                onClick={confirmCancel}
              >X</Button>
            </Col>
          </Row>
        </Container>
        <div style={{padding:"20px 20px 20px 0"}}>
          <FormContainer
            requiredConfig={requiredConfig}
            workflowConfig={editFormConfig}
          />
        </div>
        <div
          style={{
            textAlign: "right",
            padding:"10px"
          }}
        >
          <Button
            onClick={confirmCancel}
          >Cancel</Button>
          <p/>
        </div>
      </Modal>
      <Modal
        isOpen={displayConfirmCancel}
        size={"sm"}
      >
        <div style={{textAlign:"center"}}>
          <p/>
          <p/>
          <h4>Are you sure you want to cancel without submitting?</h4>
          <div>
            <Button
              size={"lg"}
              onClick={() => {
                setDisplayNewModal(false)
                setDisplayConfirmCancel(false)
              }}
            >Yes</Button>{` `}
            <Button
                size={"lg"}
                onClick={() => {
                  setDisplayConfirmCancel(false)
                }}
            >No</Button>
          </div>
          <p/>
          <p/>
        </div>
      </Modal>
    </Container>
  );
};

export default SearchWithNewContainer;