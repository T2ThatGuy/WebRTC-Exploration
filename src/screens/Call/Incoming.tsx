import { Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { AculabBaseClass } from '@aculab-com/react-native-aculab-client';

import { Button } from '@/components/ui/Button';
import { COLOURS, buttonStyle, style } from '@/styles';
import { useCallSettings } from '@/providers/CallSettings';

function Incoming() {
    const { activeCall } = useCallSettings();

    return (
        <View style={[style.screen, style.center]}>
            <Text style={style.callingText}>Incoming Call</Text>
            <Text style={style.callingText}>
                {AculabBaseClass._incomingCallClientId}
            </Text>

            <View style={buttonStyle.bottom}>
                <Button
                    style={[
                        buttonStyle.button,
                        { backgroundColor: COLOURS.DANGER },
                    ]}
                    onPress={() =>
                        AculabBaseClass.reject(
                            activeCall as Parameters<
                                typeof AculabBaseClass.reject
                            >[0],
                        )
                    }>
                    <MaterialIcon
                        name="clear"
                        style={buttonStyle.icon}
                        color={COLOURS.WHITE}
                        size={28}
                    />
                </Button>

                <Button
                    style={[
                        buttonStyle.button,
                        { backgroundColor: COLOURS.GREEN },
                    ]}
                    onPress={() =>
                        AculabBaseClass.answer(
                            activeCall as Parameters<
                                typeof AculabBaseClass.reject
                            >[0],
                        )
                    }>
                    <MaterialIcon
                        name="call"
                        style={buttonStyle.icon}
                        color={COLOURS.WHITE}
                        size={28}
                    />
                </Button>
            </View>
        </View>
    );
}

export default Incoming;
