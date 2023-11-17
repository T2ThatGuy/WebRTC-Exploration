import { SafeAreaView, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLOURS, style } from '@/styles';
import MakeCall from '@components/forms/MakeCall';
import CallSettingsProvider, { useCallSettings } from '@providers/CallSettings';

// Call Navigation Stack
const CallNavigationStack = createNativeStackNavigator();

function CallForm() {
    return (
        <SafeAreaView style={style.screen}>
            <MakeCall />
        </SafeAreaView>
    );
}

function Calling() {
    const { callId } = useCallSettings();

    return (
        <SafeAreaView style={style.screen}>
            <Text style={{ color: COLOURS.PRIMARY }}>Calling {callId}</Text>
        </SafeAreaView>
    );
}

function Connected() {
    const { callId } = useCallSettings();

    return (
        <SafeAreaView style={style.screen}>
            <Text style={{ color: COLOURS.PRIMARY }}>
                Connected with {callId}
            </Text>
        </SafeAreaView>
    );
}

function WrappedCallScreen() {
    return (
        <CallSettingsProvider>
            <CallNavigationStack.Navigator>
                <CallNavigationStack.Screen
                    name="MakeCall"
                    component={CallForm}
                    options={{ headerShown: false, animation: 'none' }}
                />
                <CallNavigationStack.Screen
                    name="Calling"
                    component={Calling}
                    options={{ headerShown: false, animation: 'none' }}
                />
                <CallNavigationStack.Screen
                    name="Connected"
                    component={Connected}
                    options={{ headerShown: false, animation: 'none' }}
                />
            </CallNavigationStack.Navigator>
        </CallSettingsProvider>
    );
}

export default WrappedCallScreen;
