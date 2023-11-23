import { SafeAreaView } from 'react-native';

import { style } from '@/styles';
import CallButtons from '@components/CallButtons';
import StreamHandler from '@components/StreamHandler';

// Call Connection Successfully
function ConnectedScreen() {
    return (
        <SafeAreaView style={style.screen}>
            <StreamHandler />
            <CallButtons />
        </SafeAreaView>
    );
}

export default ConnectedScreen;
