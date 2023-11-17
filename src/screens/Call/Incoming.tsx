import { StyleSheet, Text, View } from 'react-native';
import { AculabBaseClass } from '@aculab-com/react-native-aculab-client';

import { style } from '@/styles';

function Incoming() {
    return (
        <View style={style.center}>
            <Text style={componentStyle.callingText}>Incoming Call</Text>
            <Text style={componentStyle.callingText}>
                {AculabBaseClass._incomingCallClientId}
            </Text>
        </View>
    );
}

export default Incoming;

const componentStyle = StyleSheet.create({
    callingText: { fontSize: 25, marginVertical: 40 },
} as const);
