import { SafeAreaView, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { COLOURS, buttonStyle, style } from '@/styles';
import { Button } from '@/components/ui/Button';
import { useCallSettings } from '@/providers/CallSettings';
import { AculabBaseClass } from '@aculab-com/react-native-aculab-client';

function Calling() {
    const { callId, callType, activeCall } = useCallSettings();

    return (
        <SafeAreaView style={[style.screen, style.center]}>
            <Text style={style.callingText}>
                Calling {callType} {callId}
            </Text>

            <View style={buttonStyle.bottom}>
                <Button
                    style={[
                        buttonStyle.button,
                        { backgroundColor: COLOURS.DANGER },
                    ]}
                    onPress={() => AculabBaseClass.stopCall(activeCall)}>
                    <MaterialIcon
                        name="clear"
                        style={buttonStyle.icon}
                        color={COLOURS.WHITE}
                        size={28}
                    />
                </Button>
            </View>
        </SafeAreaView>
    );
}

export default Calling;
