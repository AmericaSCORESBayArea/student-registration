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
    waiverModalTitleText:"!REGISTRATION_FORM_WAIVER_MODAL_TITLE_TEXT",
    waiverReviewAndAcceptRequestMessage:"!REGISTRATION_FORM_WAIVER_REVIEW_AND_ACCEPT_REQUEST_MESSAGE",
    waiverAcceptButtonText:"!REGISTRATION_FORM_WAIVER_ACCEPT_BUTTON_TEXT",
    waiverDeclineButtonText:"!REGISTRATION_FORM_WAIVER_DECLINE_BUTTON_TEXT",
    waiverCloseButtonText:"!REGISTRATION_FORM_WAIVER_CLOSE_BUTTON_TEXT",
    waiverShowWaiverButtonText:"!REGISTRATION_FORM_WAIVER_SHOW_WAIVER_BUTTON_TEXT",
    waiverWaiverAcceptedMessage:"!REGISTRATION_FORM_WAIVER_WAIVER_ACCEPTED_MESSAGE",
    displayWarnings: true,
    breadCrumbLink:true
  }
];

export default workflowConfig;