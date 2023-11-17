import { StyleSheet } from 'react-native';
import { RTCView } from 'react-native-webrtc';

import { useCallSettings } from '@providers/CallSettings';

function RemoteStream() {
    const { remoteStream } = useCallSettings();

    if (!remoteStream) {
        return null;
    }

    return (
        <RTCView
            streamURL={remoteStream?.toURL() || ''}
            style={style.remoteView}
        />
    );
}

export default RemoteStream;

const style = StyleSheet.create({
    remoteView: {
        height: '94%',
        width: '100%',
        zIndex: 0,
    },
});
