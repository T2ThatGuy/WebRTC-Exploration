import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { COLOURS } from '@/styles';
import HeaderBackButton from '@ui/HeaderButton';
import { CallScreen, RegisterScreen, ScreenProps } from '@/screens';

const Stack = createNativeStackNavigator<ScreenProps>();
const HeaderStyling: NativeStackNavigationOptions = {
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: COLOURS.BACKGROUND,
    },
};

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
                    title: 'Call Screen',
                    headerLeft: HeaderBackButton,
                    ...HeaderStyling,
                }}
            />
        </Stack.Navigator>
    );
}

export default Router;
