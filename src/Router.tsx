import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderStyling } from '@/styles';
import { CallScreen, RegisterScreen, ScreenProps } from '@/screens';

const Stack = createNativeStackNavigator<ScreenProps>();

function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: 'Register Screen', ...HeaderStyling }}
            />
            <Stack.Screen
                name="Call"
                component={CallScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default Router;
