import { SafeAreaView, Text } from 'react-native';

import { COLOURS, style } from '@/styles';
import { useCallSettings } from '@/providers/CallSettings';

function Calling() {
    const { callId } = useCallSettings();

    return (
        <SafeAreaView style={style.screen}>
            <Text style={{ color: COLOURS.PRIMARY }}>Calling {callId}</Text>
        </SafeAreaView>
    );
}

export default Calling;
