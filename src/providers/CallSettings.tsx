import { AculabBaseClass } from '@aculab-com/react-native-aculab-client';
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { MediaStream } from 'react-native-webrtc';

const CallSettingsContext = createContext(
    {} as {
        callId: string;
        isInbound: boolean;
        isOutbound: boolean;
        callType?: CallType;
        localStream?: MediaStream;
        remoteStream?: MediaStream;
        webRTCState: WebRTCState;
        activeCall?: unknown;
        localMicMuted: boolean;
        localVideoMuted: boolean;
        remoteVideoMuted: boolean;
        makeCall: (type: CallType, id: string) => Promise<void>;
        setLocalMicMuted: Dispatch<SetStateAction<boolean>>;
        setLocalVideoMuted: Dispatch<SetStateAction<boolean>>;
    },
);

type WebRTCState =
    | 'idle'
    | 'ringing'
    | 'gotMedia'
    | 'connected'
    | 'incomingCall';

type CallType = 'client' | 'service';

function CallSettingsProvider({ children }: { children: ReactNode }) {
    const [callId, setCallId] = useState('');
    const [isInbound, setIsInbound] = useState(false);
    const [isOutbound, setIsOutbound] = useState(false);
    const [callType, setCallType] = useState<CallType>();
    const [localStream, setLocalStream] = useState<MediaStream>();
    const [remoteStream, setRemoteStream] = useState<MediaStream>();
    const [webRTCState, setWebRTCState] = useState<WebRTCState>('idle');

    // TODO: Add types when react-native-aculab-client gets updated
    const [activeCall, setActiveCall] = useState();

    const [localMicMuted, setLocalMicMuted] = useState(false);
    const [localVideoMuted, setLocalVideoMuted] = useState(false);
    const [remoteVideoMuted, setRemoteVideoMuted] = useState(false);

    const makeCall = useCallback(async (type: CallType, id: string) => {
        const callFunc =
            type === 'client'
                ? AculabBaseClass.callClient
                : AculabBaseClass.callService;

        setCallId(id);
        setIsOutbound(true);
        setActiveCall(await callFunc(id));
    }, []);

    // Register On Events for AculabBaseClass
    useEffect(() => {
        AculabBaseClass.onDisconnected = () => {
            setIsInbound(false);
            setIsOutbound(false);
            setCallType(undefined);
            setWebRTCState('idle');
            setActiveCall(undefined);
            setLocalStream(undefined);
            setRemoteStream(undefined);
        };

        AculabBaseClass.onRinging = () => {
            setWebRTCState('ringing');
        };

        AculabBaseClass.onGotMedia = () => {
            setWebRTCState('gotMedia');
        };

        AculabBaseClass.onConnected = (obj) => {
            setWebRTCState('connected');
            setRemoteStream(obj.call._remote_stream);
            setLocalStream(AculabBaseClass.getLocalStream(activeCall));
        };

        AculabBaseClass.onIncomingCall = (obj) => {
            setIsInbound(true);
            setCallType('client');
            setActiveCall(obj.call);
            setWebRTCState('incomingCall');
        };

        AculabBaseClass.onLocalVideoMute = () => {
            setLocalVideoMuted(true);
        };

        AculabBaseClass.onLocalVideoUnmute = () => {
            setLocalVideoMuted(false);
        };

        AculabBaseClass.onRemoteVideoMute = () => {
            setRemoteVideoMuted(true);
        };

        AculabBaseClass.onRemoteVideoUnmute = () => {
            setRemoteVideoMuted(false);
        };
    }, [activeCall]);

    const values = useMemo(
        () => ({
            callId,
            isInbound,
            isOutbound,
            callType,
            localStream,
            remoteStream,
            webRTCState,
            activeCall,
            localMicMuted,
            localVideoMuted,
            remoteVideoMuted,
            makeCall,
            setLocalMicMuted,
            setLocalVideoMuted,
        }),
        [
            callId,
            isInbound,
            isOutbound,
            callType,
            localStream,
            remoteStream,
            webRTCState,
            activeCall,
            localMicMuted,
            localVideoMuted,
            remoteVideoMuted,
            makeCall,
            setLocalMicMuted,
            setLocalVideoMuted,
        ],
    );

    return (
        <CallSettingsContext.Provider value={values}>
            {children}
        </CallSettingsContext.Provider>
    );
}

export default CallSettingsProvider;
export const useCallSettings = () => {
    const context = useContext(CallSettingsContext);
    if (!context) {
        throw new Error(
            'useCallSettings should be used within the context of a CallSettingsProvider component',
        );
    }

    return context;
};
