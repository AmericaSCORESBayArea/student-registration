import languageFormConfig from "./forms/language";
import parentOrCoachFormConfig from "./forms/parentOrCoach";
import newOrExistingFormConfig from "./forms/newOrExisting";
import registrationFormConfig from "./forms/registration";

const workflowConfig = [
  {
    formName:"Language",
    isStartingForm:true,
    formConfig:languageFormConfig,
    nextForm:"Parent or Coach"
  },
  {
    formName:"Parent or Coach",
    formConfig:parentOrCoachFormConfig,
    nextForm:"New or Existing"
  },
  {
    formName:"New or Existing",
    formConfig:newOrExistingFormConfig,
    nextForm:"Registration"
  },
  {
    formName:"Registration",
    formConfig:registrationFormConfig,
    postEndpoint:"/register",
    displayWaiver:true
  }
];

export default workflowConfig;