import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CallSettingsProvider from '@/providers/CallSettings';

import FormScreen from './Form';
import CallingScreen from './Calling';
import IncomingScreen from './Incoming';
import ConnectedScreen from './Connected';

export type CallScreenProps = {
    MakeCall: undefined;
    Calling: undefined;
    Incoming: undefined;
    Connected: undefined;
};

const CallNavigationStack = createNativeStackNavigator<CallScreenProps>();

function CallScreenRouter() {
    return (
        <CallSettingsProvider>
            <CallNavigationStack.Navigator>
                <CallNavigationStack.Screen
                    name="MakeCall"
                    component={FormScreen}
                    options={{ headerShown: false, animation: 'none' }}
                />
                <CallNavigationStack.Screen
                    name="Calling"
                    component={CallingScreen}
                    options={{ headerShown: false, animation: 'none' }}
                />
                <CallNavigationStack.Screen
                    name="Incoming"
                    component={IncomingScreen}
                    options={{ headerShown: false, animation: 'none' }}
                />
                <CallNavigationStack.Screen
                    name="Connected"
                    component={ConnectedScreen}
                    options={{ headerShown: false, animation: 'none' }}
                />
            </CallNavigationStack.Navigator>
        </CallSettingsProvider>
    );
}

export default CallScreenRouter;
