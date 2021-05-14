const newOrExistingFormConfig = [
  {
    dataType: "buttonOptions",
    formValue: "NewOrExisting",
    formLabel: "!NEW_OR_EXISTING_FORM_LABEL_TEXT",
    helpText: "!NEW_OR_EXISTING_FORM_HELP_TEXT",
    placeholder: "",
    isRequired: true,
    buttonItems: [
      {
        displayValue:"!NEW_OR_EXISTING_FORM_BUTTON_TEXT_NEW",
        value:"New"
      },
      {
        displayValue:"!NEW_OR_EXISTING_FORM_BUTTON_TEXT_EXISTING",
        value:"Existing"
      }
    ]
  }
];

export default newOrExistingFormConfig;