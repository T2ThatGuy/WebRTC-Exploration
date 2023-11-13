import {
    AculabBaseClass,
    getToken,
} from '@aculab-com/react-native-aculab-client';
import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

const AculabCloudContext = createContext(
    {} as {
        client: null;
        webRTCToken: string;
        unregister: () => void;
        register: (options: RegisterOptions) => Promise<void>;
    },
);

type RegisterOptions = {
    cloudRegionId: string;
    webRTCAccessKey: string;
    registerClientId: string;
    logLevel: string | number;
    cloudUsername: string;
    apiAccessKey: string;
};

function AculabCloudProvider({ children }: { children: ReactNode }) {
    const [client, setClient] = useState(null);
    const [webRTCToken, setWebRTCToken] = useState('');

    const register = useCallback(
        async ({
            cloudRegionId,
            webRTCAccessKey,
            registerClientId,
            logLevel,
            cloudUsername,
            apiAccessKey,
        }: RegisterOptions) => {
            const newWebRTCToken = await getToken({
                registerClientId: registerClientId,
                tokenLifeTime: 3600,
                enableIncomingCall: true,
                callClientRange: '*',
                cloudRegionId: cloudRegionId,
                cloudUsername: cloudUsername,
                apiAccessKey: apiAccessKey,
            });

            if (!newWebRTCToken) {
                return;
            }

            setWebRTCToken(newWebRTCToken);

            const newClient = await AculabBaseClass.register(
                cloudRegionId,
                webRTCAccessKey,
                registerClientId,
                logLevel,
                newWebRTCToken,
            );

            if (newClient) {
                AculabBaseClass._client = newClient;
                setClient(newClient);
            }
        },
        [],
    );

    const unregister = useCallback(() => {
        setClient(null);
        setWebRTCToken('');

        AculabBaseClass.unregister();
    }, []);

    const values = useMemo(
        () => ({ client, webRTCToken, register, unregister }),
        [client, webRTCToken, register, unregister],
    );

    return (
        <AculabCloudContext.Provider value={values}>
            {children}
        </AculabCloudContext.Provider>
    );
}

export default AculabCloudProvider;
export const useAculabCloud = () => {
    const context = useContext(AculabCloudContext);
    if (!context) {
        throw new Error(
            'useAculabCloud should be used within the context of a AculabCloudProvider component',
        );
    }

    return context;
};
