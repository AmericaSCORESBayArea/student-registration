const parentOrCoachFormConfig = [
  {
    dataType:"enum",
    formValue:"ParentOfCoach",
    formLabel:"Parent of Coach?",
    helpText:"Select whether you are a parent or coach",
    placeholder:"Select Parent or Coach",
    isRequired: true,
    enumItems: [
      "Parent",
      "Coach"
    ]
  }
];

export default parentOrCoachFormConfig;
