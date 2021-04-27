import React, {useState} from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import getConfigurationValueByKey from "../modules/getConfigurationValueByKey";
import FormContainer from "./Form";
import { Button, Spinner } from 'reactstrap';

const firebaseAuth = {
  apiKey: getConfigurationValueByKey("REACT_APP_FIREBASE_API_KEY"),
  authDomain: getConfigurationValueByKey("REACT_APP_FIREBASE_AUTH_DOMAIN"),
  databaseURL: getConfigurationValueByKey("REACT_APP_FIREBASE_DATABASE_URL"),
  projectId: getConfigurationValueByKey("REACT_APP_FIREBASE_PROJECT_ID"),
  storageBucket: getConfigurationValueByKey("REACT_APP_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: getConfigurationValueByKey("REACT_APP_FIREBASE_MESSAGE_SENDER_ID"),
  appId: getConfigurationValueByKey("REACT_APP_FIREBASE_APP_ID")
};

firebase.initializeApp(firebaseAuth);

const FirebaseAuthContainer  = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [firebaseAuthCallbacksSet, setFirebaseAuthCallbacksSet] = useState(false);
  const [firebaseAuthObj, setFirebaseAuthObj] = useState(null);

  if (!firebaseAuthCallbacksSet) {
    setFirebaseAuthCallbacksSet(true);
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
      <div>
        <p><Spinner size="sm" color="primary"/>{` `}Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {
        !firebaseAuthObj ?
          <StyledFirebaseAuth
            uiConfig={{
              signInOptions: [
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
              ]
            }}
            firebaseAuth={firebase.auth()}
          />
          :
          <div>
            <Button
              onClick={signOutClickCallback}
            >Sign-out</Button>
            <FormContainer/>
          </div>
      }
    </div>
  );
};

export default FirebaseAuthContainer;