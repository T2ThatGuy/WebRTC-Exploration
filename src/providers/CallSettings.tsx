import { MediaStream } from 'react-native-webrtc';
import { useNavigation } from '@react-navigation/native';
import {
    AculabBaseClass,
    turnOnSpeaker,
} from '@aculab-com/react-native-aculab-client';
import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

import { CallNavigationProps } from '@/screens';

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
        speakerEnabled: boolean;
        localVideoMuted: boolean;
        remoteVideoMuted: boolean;
        toggleMic: () => void;
        toggleCamera: () => void;
        toggleSpeaker: () => void;
        makeCall: (type: CallType, id: string) => Promise<void>;
    },
);

type WebRTCState =
    | 'idle'
    | 'ringing'
    | 'gotMedia'
    | 'connected'
    | 'incomingCall';

export type CallType = 'client' | 'service';

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

    const [speakerEnabled, setSpeakerEnabled] = useState(false);
    const [localMicMuted, setLocalMicMuted] = useState(false);
    const [localVideoMuted, setLocalVideoMuted] = useState(false);
    const [remoteVideoMuted, setRemoteVideoMuted] = useState(false);

    const navigation = useNavigation<CallNavigationProps>();

    const makeCall = useCallback(async (type: CallType, id: string) => {
        const callFunc =
            type === 'client'
                ? AculabBaseClass.callClient
                : AculabBaseClass.callService;

        setCallId(id);
        setCallType(type);
        setIsOutbound(true);
        setActiveCall(await callFunc(id));
    }, []);

    const toggleMic = useCallback(() => {
        AculabBaseClass._mic = !AculabBaseClass._mic;
        setLocalMicMuted(AculabBaseClass._mic);
        AculabBaseClass.mute(activeCall);
    }, [activeCall]);

    const toggleCamera = useCallback(() => {
        AculabBaseClass._camera = !AculabBaseClass._camera;
        setLocalVideoMuted(AculabBaseClass._camera);
        AculabBaseClass.mute(activeCall);
    }, [activeCall]);

    const toggleSpeaker = useCallback(() => {
        const enableSpeaker = !speakerEnabled;

        turnOnSpeaker(enableSpeaker);
        setSpeakerEnabled(enableSpeaker);
    }, [speakerEnabled]);

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

            setLocalMicMuted(false);
            setLocalVideoMuted(false);
            setRemoteVideoMuted(false);

            navigation.navigate('Call', { screen: 'MakeCall' });
        };

        AculabBaseClass.onRinging = () => {
            setWebRTCState('ringing');

            navigation.navigate('Call', { screen: 'Calling' });
        };

        AculabBaseClass.onGotMedia = () => {
            setWebRTCState('gotMedia');
        };

        AculabBaseClass.onConnected = (obj) => {
            setWebRTCState('connected');
            setRemoteStream(obj.call._remote_stream);
            setLocalStream(AculabBaseClass.getLocalStream(activeCall));

            navigation.navigate('Call', { screen: 'Connected' });
        };

        AculabBaseClass.onIncomingCall = (obj) => {
            setIsInbound(true);
            setCallType('client');
            setActiveCall(obj.call);
            setWebRTCState('incomingCall');

            navigation.navigate('Call', { screen: 'Incoming' });
        };

        AculabBaseClass.onLocalVideoMute = () => {
            console.log('Local Video Muted');
            setLocalVideoMuted(true);
        };

        AculabBaseClass.onLocalVideoUnmute = () => {
            console.log('Local Video Unmuted');
            setLocalVideoMuted(false);
        };

        AculabBaseClass.onRemoteVideoMute = () => {
            console.log('Remote Video Muted');
            setRemoteVideoMuted(true);
        };

        AculabBaseClass.onRemoteVideoUnmute = () => {
            console.log('Remote Video Unmuted');
            setRemoteVideoMuted(false);
        };
    }, [activeCall, navigation]);

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
            speakerEnabled,
            localVideoMuted,
            remoteVideoMuted,
            makeCall,
            toggleMic,
            toggleCamera,
            toggleSpeaker,
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
            speakerEnabled,
            localVideoMuted,
            remoteVideoMuted,
            makeCall,
            toggleMic,
            toggleCamera,
            toggleSpeaker,
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
