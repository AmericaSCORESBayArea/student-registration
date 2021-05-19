import FirebaseSignOutContainer from "../containers/FirebaseSignOut";

const toolbarConfig = [
  {
    name: "firebaseSignOut",
    Component: FirebaseSignOutContainer,
    signOutButtonText:"!FIREBASE_AUTHENTICATION_SIGN_OUT_BUTTON_TEXT",
    signingOutButtonText:"!FIREBASE_AUTHENTICATION_SIGNING_OUT_BUTTON_TEXT"
  }
];

export default toolbarConfig;