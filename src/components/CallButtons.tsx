import { useState } from 'react';
import { View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { AculabBaseClass } from '@aculab-com/react-native-aculab-client';

import { Button } from '@ui/Button';
import { COLOURS, buttonStyle as style } from '@/styles';
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
                    AculabBaseClass.swapCam(
                        localVideoMuted,
                        activeCall as Parameters<
                            typeof AculabBaseClass.swapCam
                        >[1],
                    );
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
