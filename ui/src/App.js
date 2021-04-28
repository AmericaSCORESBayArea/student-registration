import React from 'react';
import { Fade, Container, Row, Col, Alert } from 'reactstrap';
import ConfigContainer from "./containers/Config";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {errorMessage: null};
  }

  static getDerivedStateFromError(error) {
    const {message} = error;
    return {
      errorMessage: !!message ? `Application Error : ${message}` : "Unknown application error"
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Error Caught!");
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (!!this.state.errorMessage) {
      return (
        <div>

          <img
            src={"/America-SCORES-Logo.jpg"}
            style={{
              width: "100%",
              maxWidth: "300px"
            }}
           alt={`America Scores Logo`}/>
          <h1
            style={{textAlign: "center"}}
          >Student Registration</h1>
          <Alert
            color="danger"
          >
            <h3>{`${this.state.errorMessage}`}</h3>
          </Alert>
        </div>
      );
    }
    return (
      <div
        style={{paddingBottom: "50px"}}
      >
        <Fade>
          <Container>
            <Row>
              <Col>
                <img
                  src={"/America-SCORES-Logo.jpg"}
                  style={{
                    width: "100%",
                    maxWidth: "300px"
                  }}
                  alt={`America Scores Logo`}
                />
                <h1
                  style={{textAlign: "center"}}
                >Student Registration</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <ConfigContainer/>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>
    );
  }
}

export default App;