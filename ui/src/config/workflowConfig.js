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
    localStore:true,
    submitOnValueChange:true,
    breadCrumbLink:true,
    breadCrumbPreviewFormStateValue:"Language",
    isLocalizationForm:true
  },
  {
    formName: "Authentication",
    formConfig: authenticationFormConfig,
    nextForm: "Parent or Coach",
    submitOnAnyValue:true
  },
  {
    formName: "Parent or Coach",
    formConfig: parentOrCoachFormConfig,
    nextForm: "New or Existing",
    localStore:true,
    submitOnValueChange:true,
    breadCrumbLink:true,
    breadCrumbPreviewFormStateValue:"ParentOrCoach"
  },
  {
    formName: "New or Existing",
    formConfig: newOrExistingFormConfig,
    nextForm: "Registration",
    localStore:true,
    submitOnValueChange:true,
    breadCrumbLink:true,
    breadCrumbPreviewFormStateValue:"NewOrExisting"
  },
  {
    formName: "Registration",
    formConfig: registrationFormConfig,
    postEndpoint: "/register",
    displayWaiver: true,
    displayWarnings: true,
    breadCrumbLink:true
  }
];

export default workflowConfig;