import React from 'react';
import { Fade, Container, Row, Col, Alert} from 'reactstrap';
import store from "store2";
import 'bootstrap/dist/css/bootstrap.css';
import ConfigContainer from "./containers/Config";
import ButtonOptionsElement from "./components/form/ButtonOptions";
import localizationFormConfig from "./config/forms/localization";

const defaultLocalizationValue = `en`;
const localizationStoreKeyName = `localization`;

const getLocalStoreLocalizationValue = () => {
  const localStoreValue = store.get(localizationStoreKeyName);
  return !!localStoreValue ? localStoreValue : defaultLocalizationValue;
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      localizationValue: getLocalStoreLocalizationValue()
    };
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

    const onLocalizationChange = (e) => {
      const newValue = e.target.value;
      if (!!newValue) {
        const currentValue = store.get(localizationStoreKeyName);
        if (currentValue !== newValue) {
          store.set(localizationStoreKeyName, newValue);
          this.setState({
            localizationValue: e.target.value
          });
        }
      }
    };

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
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    listStyleType: "none"
                  }}
                >
                  <li>
                    <img
                      src={"/America-SCORES-Logo.jpg"}
                      style={{
                        width: "100%",
                        maxWidth: "300px"
                      }}
                      alt={`America Scores Logo`}
                    />
                  </li>
                  <li
                    style={{marginLeft: "auto"}}
                  >
                    <ButtonOptionsElement
                      config={localizationFormConfig}
                      onValueChange={onLocalizationChange}
                      currentValue={this.state.localizationValue}
                    />
                  </li>
                </ul>
                <h1
                  style={{textAlign: "center"}}
                >Student Registration</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <ConfigContainer
                  localizationValue={this.state.localizationValue}
                />
              </Col>
            </Row>
	    <Row>
	    <a href="https://scoresu.org/privacy-policy#" target="_blank">Privacy-Policy</a>
	    </Row>
          </Container>
        </Fade>
      </div>
    );
  }
}

export default App;
