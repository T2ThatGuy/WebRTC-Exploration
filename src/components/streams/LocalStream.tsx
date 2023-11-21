import { StyleSheet, View } from 'react-native';
import { RTCView } from 'react-native-webrtc';

import { useCallSettings } from '@providers/CallSettings';

function LocalStream() {
    const { localStream, remoteVideoMuted, localVideoMuted } =
        useCallSettings();

    if (!localStream || localVideoMuted) {
        return null;
    }

    if (remoteVideoMuted) {
        return (
            <RTCView
                streamURL={localStream?.toURL() || ''}
                style={style.localView}
            />
        );
    }

    return (
        <View style={style.topRight}>
            <RTCView
                streamURL={localStream?.toURL() || ''}
                style={style.localView}
            />
        </View>
    );
}

export default LocalStream;

const style = StyleSheet.create({
    topRight: {
        height: 105,
        width: '16%',
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 9,
    },
    localView: {
        height: '100%',
        width: '100%',
        zIndex: 10,
    },
} as const);
