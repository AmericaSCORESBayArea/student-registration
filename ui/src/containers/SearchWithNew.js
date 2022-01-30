import React, {useEffect, useState} from 'react';
import "firebase/compat/auth";
import SpinnerWithMessage from "../components/Spinner";
import { getAuth } from "firebase/auth";
import axios from "axios";
import {API_URL} from "./Config";
import {Button, Card, Row, Col, Collapse, Table, Container} from "reactstrap";

const hiddenKeys = ["Id", "SchoolSiteId", "Name"]

const PreviousDetailedContent = ({content}) => {
  const [isOpen, setIsOpen] = useState(false)

  const displayKeys = Object.keys(content).filter((item) => hiddenKeys.indexOf(item) === -1)

  return (
    <Card>
      <Row>
        <Col xs={12} sm={3} lg={2}>
          <Button onClick={() => setIsOpen(!isOpen)}>{`View`}</Button>
        </Col>
        <Col>
          <p>{`${content.FirstName} ${content.LastName}`}</p>
        </Col>
      </Row>
      <Collapse
        isOpen={isOpen}
      >
        <Container>
          <Row>
            <Col>
              <Table striped={true}>
                <tbody>
                <tr>
                  {
                    displayKeys.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td key={"key"}><b>{`${item} :`}</b></td>
                          <td key={"value"}>{content[item]}</td>
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
  },[])


  if (loading)
    return (<SpinnerWithMessage
      message={`Loading...`}
    />)
  return (
    <div>
      <Button>New</Button>
      {
        previousRegistrations.length > 0 &&
        previousRegistrations.map((item, index) =>
          <PreviousDetailedContent
            key={index}
            content={item}
          />
        )
      }
    </div>
  );
};

export default SearchWithNewContainer;