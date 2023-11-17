import { StyleSheet, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { AculabBaseClass } from '@aculab-com/react-native-aculab-client';

import { Button } from '@ui/Button';
import { useCallSettings } from '@providers/CallSettings';
import { COLOURS } from '@/styles';

function CallButtons() {
    const { activeCall } = useCallSettings();

    return (
        <View style={style.bottom}>
            <Button
                style={[style.button, style.hangupIcon]}
                onPress={() => AculabBaseClass.stopCall(activeCall)}>
                <MaterialIcon name="call-end" style={style.icon} size={30} />
            </Button>
        </View>
    );
}

export default CallButtons;

const style = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        zIndex: 3,
    },
    button: {
        borderRadius: 100,
        width: 50,
        height: 50,
        elevation: 8,
    },
    icon: {
        color: COLOURS.PRIMARY,
        alignSelf: 'center',
    },
    hangupIcon: {
        backgroundColor: COLOURS.DANGER,
    },
} as const);
