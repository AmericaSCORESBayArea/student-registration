import React, {useState} from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import FormContainer from "./Form";
import { Fade, Button, Spinner } from 'reactstrap';
import SpinnerWithMessage from "../components/Spinner";

const FirebaseAuthContainer  = ({appConfig}) => {

  const firebaseAuth = {
    apiKey: appConfig.REACT_APP_FIREBASE_API_KEY,
    authDomain: appConfig.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: appConfig.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: appConfig.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: appConfig.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: appConfig.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: appConfig.REACT_APP_FIREBASE_APP_ID
  };

  const [isLoading, setIsLoading] = useState(true);
  const [firebaseAuthCallbacksSet, setFirebaseAuthCallbacksSet] = useState(false);
  const [firebaseAuthObj, setFirebaseAuthObj] = useState(null);

  if (!firebaseAuthCallbacksSet) {
    setFirebaseAuthCallbacksSet(true);
    firebase.initializeApp(firebaseAuth);
    firebase.auth().onAuthStateChanged((user) => {
      setFirebaseAuthObj(user);
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  const signOutClickCallback = () => {
    setIsLoading(true);
    firebase.auth().signOut();
    setTimeout(() => {
      window.location = "/";
    }, 1000);
  }

  if (isLoading) {
    return (
      <SpinnerWithMessage
        message={`Loading...`}
      />
    );
  }

  return (
    <div>
      {
        !firebaseAuthObj ?
          <div>
            <StyledFirebaseAuth
              uiConfig={{
                signInOptions: [
                  firebase.auth.PhoneAuthProvider.PROVIDER_ID
                ]
              }}
              firebaseAuth={firebase.auth()}
            />
          </div>
          :
          <div>
            <div className="clearfix" style={{padding: '.5rem'}}>
              <Fade>
                <Button
                  className="btn btn-secondary float-right"
                  onClick={signOutClickCallback}
                >Sign-out</Button>
              </Fade>
            </div>
            <FormContainer/>
          </div>
      }
    </div>
  );
};

export default FirebaseAuthContainer;