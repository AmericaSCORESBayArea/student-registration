import React, {useEffect, useState} from 'react';
import "firebase/compat/auth";
import SpinnerWithMessage from "../components/Spinner";
import { getAuth } from "firebase/auth";
import axios from "axios";
import {API_URL} from "./Config";
import {Button, Card, Row, Col, Collapse, Table, Container} from "reactstrap";

const hiddenKeys = ["Id", "SchoolSiteId", "Name"]

const PreviousDetailedContent = ({content,contentIndex}) => {
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
              <Button
                color={"primary"}
                onClick={() => console.log("click")}
              >{`Edit`}</Button>
              <small style={{paddingLeft:"10px"}}>Click here to modify the registration.</small>
              <p/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped={true}>
                <tbody>
                <tr>
                  {
                    displayKeys.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td key={"key"}><b>{`${item}`}</b></td>
                          <td key={"value"}>{`${content[item]}`}</td>
                        </tr>
                      )
                    })
                  }
                </tr>
                </tbody>
              </Table></Col>
          </Row>
        </Container>
      </Collapse>
    </Card>
  )
}

const SearchWithNewContainer  = ({appConfig,onValueChange,currentValue}) => {

  const [loading, setLoading] = useState(false)
  const [previousRegistrations, setPreviousRegistrations] = useState([])

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
    return (<SpinnerWithMessage
      message={`Loading...`}
    />)
  return (
    <Container>
      <Row>
        <Col>
          <Button
            size={"lg"}
            color={"primary"}
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
                />
              )
            }
          </Col>
        </Row>
      }
    </Container>
  );
};

export default SearchWithNewContainer;