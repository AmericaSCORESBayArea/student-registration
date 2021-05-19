import React, {useState,useEffect} from 'react';
import firebase from 'firebase';
import { Fade, Button } from 'reactstrap';

const FirebaseSignOutContainer  = ({toolbarConfig,workflowState}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningOut, setIsSigningOut] = useState(false);

  useEffect(() => {
    if (!!workflowState) {
      const authenticationFormState = workflowState.filter((item) => item.formName === "Authentication" && !!item.formState).pop();
      if (!!authenticationFormState) {
        setIsLoggedIn(true);
      }
    }
    setIsLoading(false);
  });

  const signOutClickCallback = () => {
    setIsSigningOut(true);
    setIsLoading(true);
    firebase.auth().signOut();
    setTimeout(() => {
      window.location = "/";
    }, 1000);
  };

  return (
    isLoggedIn &&
    <div>
      <div className="clearfix" style={{padding: '.5rem'}}>
        <Fade>
          <Button
            className="btn btn-secondary float-right"
            onClick={signOutClickCallback}
            disabled={isLoading || isSigningOut}
          >{isSigningOut ? `Signing Out` : `Sign Out`}</Button>
        </Fade>
      </div>
    </div>
  );
};

export default FirebaseSignOutContainer;