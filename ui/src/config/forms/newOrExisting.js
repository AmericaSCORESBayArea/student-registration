const newOrExistingFormConfig = [
  {
    dataType:"enum",
    formValue:"NewOrExisting",
    formLabel:"New or Existing?",
    helpText:"Select whether you are starting a new student registration or updating an existing student registration",
    placeholder:"Select New  or Existing",
    isRequired: true,
    enumItems: [
      "New",
      "Existing"
    ]
  }
];

export default newOrExistingFormConfig;
