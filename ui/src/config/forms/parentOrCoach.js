const parentOrCoachFormConfig = [
  {
    dataType: "buttonOptions",
    formValue: "ParentOrCoach",
    formLabel: "!PARENT_OR_COACH_FORM_LABEL_TEXT",
    helpText: "!PARENT_OR_COACH_FORM_HELP_TEXT",
    placeholder: "!PARENT_OR_COACH_FORM_PLACEHOLDER_TEXT",
    isRequired: true,
    buttonItems: [
      {
        displayValue:"!PARENT_OR_COACH_FORM_BUTTON_TEXT_PARENT",
        value:"Parent"
      },
      {
        displayValue:"!PARENT_OR_COACH_FORM_BUTTON_TEXT_COACH",
        value:"Coach"
      }
    ]
  }
];

export default parentOrCoachFormConfig;