import registrationFormConfig from "./registration";

const newOrExistingFormConfig = [
  {
    dataType: "searchWithNew",
    formValue: "NewOrExisting",
    formLabel: "!NEW_OR_EXISTING_FORM_LABEL_TEXT",
    helpText: "!NEW_OR_EXISTING_FORM_HELP_TEXT",
    placeholder: "",
    isRequired: true,
    editFormConfig: {
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
  }
];

export default newOrExistingFormConfig;