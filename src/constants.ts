import {
    apiAccessKey,
    cloudRegionId,
    cloudUsername,
    logLevel,
    registerClientId,
    webRTCAccessKey,
} from '@env';

export const DEFAULT_CREDENTIALS = {
    webRTCAccessKey: '' || webRTCAccessKey,
    apiAccessKey: '' || apiAccessKey,
    cloudRegionId: '' || cloudRegionId,
    cloudUsername: '' || cloudUsername,
    logLevel: '' || logLevel,
    registerClientId: '' || registerClientId,
};
