import { Text, View } from 'react-native';
import { AculabBaseClass } from '@aculab-com/react-native-aculab-client';

import { style } from '@/styles';

function Incoming() {
    return (
        <View style={[style.screen, style.center]}>
            <Text style={style.callingText}>Incoming Call</Text>
            <Text style={style.callingText}>
                {AculabBaseClass._incomingCallClientId}
            </Text>
        </View>
    );
}

export default Incoming;
