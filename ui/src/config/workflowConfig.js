import languageFormConfig from "./forms/language";
import authenticationFormConfig from "./forms/authentication";
import parentOrCoachFormConfig from "./forms/parentOrCoach";
import newOrExistingFormConfig from "./forms/newOrExisting";
import registrationFormConfig from "./forms/registration";

const workflowConfig = [
  {
    formName: "Language",
    isStartingForm: true,
    formConfig: languageFormConfig,
    nextForm: "Authentication",
    displayWaiver: false,
    displayWarnings: false,
    localStore:true,
    breadCrumbPreviewFormStateValue:"Language"
  },
  {
    formName: "Authentication",
    formConfig: authenticationFormConfig,
    nextForm: "Parent or Coach",
    displayWaiver: false,
    displayWarnings: false,
    localStore:false,
    breadCrumbPreviewFormStateValue:"UserName"
  },
  {
    formName: "Parent or Coach",
    formConfig: parentOrCoachFormConfig,
    nextForm: "New or Existing",
    displayWaiver: false,
    displayWarnings: false,
    localStore:true,
    breadCrumbPreviewFormStateValue:"ParentOrCoach"
  },
  {
    formName: "New or Existing",
    formConfig: newOrExistingFormConfig,
    nextForm: "Registration",
    displayWaiver: false,
    displayWarnings: false,
    localStore:true,
    breadCrumbPreviewFormStateValue:"NewOrExisting"
  },
  {
    formName: "Registration",
    formConfig: registrationFormConfig,
    postEndpoint: "/register",
    displayWaiver: true,
    displayWarnings: true,
    localStore:false
  }
];

export default workflowConfig;