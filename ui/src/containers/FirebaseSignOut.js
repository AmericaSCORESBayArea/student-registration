import React, {useState,useEffect} from 'react';
import { Fade, Button } from 'reactstrap';
import { getAuth,signOut } from "firebase/auth";

const FirebaseSignOutContainer  = ({toolbarConfig,workflowState}) => {

  const {signOutButtonText,signingOutButtonText} = toolbarConfig || {};

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
    const auth = getAuth();
    signOut(auth).then(() => {
      setTimeout(() => {
        window.location = "/";
      }, 1000);
    }).catch((error) => {
      // An error happened.
      console.error("error signing out")
    });
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
          >{isSigningOut ? `${!!signingOutButtonText ? signingOutButtonText : "Signing Out"}` : `${!!signOutButtonText ? signOutButtonText : "Sign Out"}`}</Button>
        </Fade>
      </div>
    </div>
  );
};

export default FirebaseSignOutContainer;