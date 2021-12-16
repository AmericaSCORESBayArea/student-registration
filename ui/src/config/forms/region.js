const regionFormConfig = [
  {
    dataType: "buttonOptions",
    formValue: "Region",
    formLabel: "!REGION_FORM_LABEL_TEXT",
    helpText: "!REGION_HELP_TEXT",
    placeholder: "!REGION_PLACEHOLDER_TEXT",
    isRequired: true,
    buttonItems: [
      {
        displayValue:"IFC",
        value:"ifc",
        image:"IFC_logo_aminated2.gif"
      },
      {
        displayValue:"OGSC",
        value:"ogsc",
        image:"OGSC_logo.png"
      },
      {
        displayValue:"SFIC",
        value:"sfic",
        image:"SFIFC_badge_md.png"
      }
    ]
  }
];

export default regionFormConfig;