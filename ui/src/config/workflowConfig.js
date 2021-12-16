import regionFormConfig from "./forms/region";
import workflowConfigIFC from "./workflow/regions/ifc";
import workflowConfigOGSC from "./workflow/regions/ogsc";
import workflowConfigSFIC from "./workflow/regions/sfic";
import authenticationFormConfig from "./forms/authentication";

const workflowConfig = [
  {
    formName: "Authentication",
    formConfig: authenticationFormConfig,
    nextForm: "Parent or Coach",
    submitOnAnyValue:true
  },
  {
    formName: "Select Region",
    formConfig: regionFormConfig,
    localStore:true,
    submitOnValueChange:true,
    breadCrumbLink:true,
    breadCrumbPreviewFormStateValue:"Region",
    decisionMatchKey:"Region",
    decisionValues: [
      {
        "decisionValue":"ifc",
        "outputConfig":workflowConfigIFC
      },
      {
        "decisionValue":"ogsc",
        "outputConfig":workflowConfigOGSC
      },
      {
        "decisionValue":"sfic",
        "outputConfig":workflowConfigSFIC
      }
    ],
  }
];

export default workflowConfig;