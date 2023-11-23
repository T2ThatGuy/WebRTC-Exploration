import { StyleSheet, View } from 'react-native';

import LocalStream from './streams/LocalStream';
import RemoteStream from './streams/RemoteStream';
import { useCallSettings } from '@/providers/CallSettings';

function StreamHandler() {
    const { callType } = useCallSettings();

    if (callType === 'service') {
        return null;
    }

    return (
        <View style={style.streams}>
            <LocalStream />
            <RemoteStream />
        </View>
    );
}

export default StreamHandler;

const style = StyleSheet.create({
    streams: { height: '94%', width: '100%' },
});
