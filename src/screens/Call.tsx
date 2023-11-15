import { SafeAreaView } from 'react-native';

import { style } from '@/styles';
import MakeCall from '@components/forms/MakeCall';
import CallSettingsProvider from '@providers/CallSettings';

function CallScreen() {
    return (
        <SafeAreaView style={style.screen}>
            <MakeCall />
        </SafeAreaView>
    );
}

function WrappedCallScreen() {
    return (
        <CallSettingsProvider>
            <CallScreen />
        </CallSettingsProvider>
    );
}

export default WrappedCallScreen;
