import languageFormConfig from "./forms/language";
import parentOrCoachFormConfig from "./forms/parentOrCoach";
import newOrExistingFormConfig from "./forms/newOrExisting";
import registrationFormConfig from "./forms/registration";

const workflowConfig = [
  {
    formName: "Language",
    isStartingForm: true,
    formConfig: languageFormConfig,
    nextForm: "Parent or Coach",
    displayWarnings: false
  },
  {
    formName: "Parent or Coach",
    formConfig: parentOrCoachFormConfig,
    nextForm: "New or Existing",
    displayWarnings: false
  },
  {
    formName: "New or Existing",
    formConfig: newOrExistingFormConfig,
    nextForm: "Registration",
    displayWarnings: false
  },
  {
    formName: "Registration",
    formConfig: registrationFormConfig,
    postEndpoint: "/register",
    displayWaiver: true,
    displayWarnings: true
  }
];

export default workflowConfig;