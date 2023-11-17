import { SafeAreaView } from 'react-native';

import { style } from '@/styles';
import CallButtons from '@components/CallButtons';
import StreamHandler from '@components/StreamHandler';
import { useCallSettings } from '@providers/CallSettings';

// Call Connection Successfully
function ConnectedScreen() {
    const { callType } = useCallSettings();

    return (
        <SafeAreaView style={style.screen}>
            {callType === 'client' ? <StreamHandler /> : null}
            <CallButtons />
        </SafeAreaView>
    );
}

export default ConnectedScreen;
