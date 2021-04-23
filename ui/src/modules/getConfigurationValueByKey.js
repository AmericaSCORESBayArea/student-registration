import configuration from "../config";
const getConfigurationValueByKey = (configKey) => !!configuration && !!configuration[configKey] ? configuration[configKey] : null;
export default getConfigurationValueByKey;