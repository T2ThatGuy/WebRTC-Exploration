import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { AculabBaseClass } from '@aculab-com/react-native-aculab-client';

import { COLOURS } from '@/styles';
import { Button } from '@ui/Button';
import { useCallSettings } from '@providers/CallSettings';

function DefaultButtons() {
    const { activeCall, toggleMic, toggleSpeaker } = useCallSettings();

    return (
        <>
            <Button
                style={[style.button, { backgroundColor: COLOURS.WHITE }]}
                onPress={() => toggleMic()}>
                <MaterialIcon
                    name="mic-off"
                    style={style.icon}
                    color={COLOURS.BACKGROUND}
                    size={30}
                />
            </Button>

            <Button
                style={[style.button, { backgroundColor: COLOURS.DANGER }]}
                onPress={() => AculabBaseClass.stopCall(activeCall)}>
                <MaterialIcon
                    name="call-end"
                    style={style.icon}
                    color={COLOURS.WHITE}
                    size={30}
                />
            </Button>
            <Button
                style={[style.button, { backgroundColor: COLOURS.WHITE }]}
                onPress={() => {
                    // setSpeakerEnabled((prev) => !prev);
                    toggleSpeaker();
                }}>
                <MaterialIcon
                    name={'volume-up'}
                    style={style.icon}
                    color={COLOURS.BACKGROUND}
                    size={30}
                />
            </Button>
        </>
    );
}

function ClientButtons() {
    const { activeCall, localVideoMuted, toggleCamera } = useCallSettings();
    const [isFrontCam, setIsFrontCam] = useState(true);

    return (
        <>
            <Button
                style={[style.button, { backgroundColor: COLOURS.WHITE }]}
                onPress={() => toggleCamera()}>
                <MaterialIcon
                    name="videocam-off"
                    style={style.icon}
                    color={COLOURS.BACKGROUND}
                    size={30}
                />
            </Button>
            <DefaultButtons />
            <Button
                style={[style.button, { backgroundColor: COLOURS.WHITE }]}
                onPress={() => {
                    AculabBaseClass.swapCam(localVideoMuted, activeCall);
                    setIsFrontCam((prev) => !prev);
                }}>
                <MaterialIcon
                    name={isFrontCam ? 'camera-rear' : 'camera-front'}
                    style={style.icon}
                    color={COLOURS.BACKGROUND}
                    size={30}
                />
            </Button>
        </>
    );
}

function CallButtons() {
    const { callType } = useCallSettings();

    return (
        <View style={style.bottom}>
            {callType === 'client' ? <ClientButtons /> : <DefaultButtons />}
        </View>
    );
}

export default CallButtons;

const style = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        zIndex: 10,
        flexDirection: 'row',
        gap: 10,
    },
    button: {
        borderRadius: 100,
        width: 50,
        height: 50,
        elevation: 8,
    },
    icon: {
        alignSelf: 'center',
    },
} as const);
