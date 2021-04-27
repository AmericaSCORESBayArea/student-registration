import dotEnvConfig from "../dotEnvConfig";
const getConfigurationValueByKey = (configKey) => !!dotEnvConfig && !!dotEnvConfig[configKey] ? dotEnvConfig[configKey] : null;
export default getConfigurationValueByKey;