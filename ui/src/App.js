// Import FirebaseAuth and firebase.
import React from 'react';
import FirebaseAuthContainer from "./containers/FirebaseAuth";

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
        <div>{`${this.state.errorMessage}`}</div>
      );
    }
    return (
      <div>
        <h1>Student Registration</h1>
        <FirebaseAuthContainer/>
      </div>
    );
  }
}

export default App;