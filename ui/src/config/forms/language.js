const languageFormConfig = [
  {
    dataType: "buttonOptions",
    formValue: "Language",
    formLabel: "!LANGUAGE_FORM_LABEL_TEXT",
    helpText: "!LANGUAGE_FORM_HELP_TEXT",
    placeholder: "!LANGUAGE_FORM_PLACEHOLDER_TEXT",
    isRequired: true,
    buttonItems: [
      {
        displayValue:"English",
        value:"en"
      },
      {
        displayValue:"Español",
        value:"es"
      },
      {
        displayValue:"中文",
        value:"zh"
      }
    ]
  }
];

export default languageFormConfig;