import languageFormConfig from "./forms/language";
import parentOrCoachFormConfig from "./forms/parentOrCoach";
import newOrExistingFormConfig from "./forms/newOrExisting";
import registrationFormConfig from "./forms/registration";

const workflowConfig = [
  {
    formName:"Language Form",
    isStartingForm:true,
    formConfig:languageFormConfig,
    nextForm:"Parent of Coach Form"
  },
  {
    formName:"Parent of Coach Form",
    formConfig:parentOrCoachFormConfig,
    nextForm:"New or Existing Form"
  },
  {
    formName:"New or Existing Form",
    formConfig:newOrExistingFormConfig,
    nextForm:"Registration Form"
  },
  {
    formName:"Registration Form",
    formConfig:registrationFormConfig,
    postEndpoint:"/register"
  }
];

export default workflowConfig;