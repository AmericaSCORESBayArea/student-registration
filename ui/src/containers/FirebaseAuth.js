import React, {useState} from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Fade, Button } from 'reactstrap';
import SpinnerWithMessage from "../components/Spinner";

const FirebaseAuthContainer  = ({appConfig,onValueChange,currentValue}) => {

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

  const submitValueChange = (firebaseAuthObj) => onValueChange(firebaseAuthObj);

  if (!firebaseAuthCallbacksSet) {
    setFirebaseAuthCallbacksSet(true);
    if (!currentValue) {
      try {
        try {
          firebase.auth(); //only fails when firebase has not been initialized
        } catch (e) {
          console.log(`Firebase App Initializing...`);
          firebase.initializeApp(firebaseAuth);
          firebase.auth().onAuthStateChanged((user) => {
            console.log("Firebase User Authorization Set!");
            submitValueChange(user);
            setFirebaseAuthObj(user);
          });
        }
      } catch (e) {
        console.error(`Unknown Firebase error!`);
        console.error(e);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      submitValueChange(currentValue);
    }
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
                ],
                callbacks: {
                  signInSuccessWithAuthResult: () => false
                }
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
          </div>
      }
    </div>
  );
};

export default FirebaseAuthContainer;