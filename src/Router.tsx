import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { COLOURS } from '@/styles';
import { HomeScreen, RegisterScreen } from '@/screens';

const Stack = createNativeStackNavigator();
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
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home Screen', ...HeaderStyling }}
            />
        </Stack.Navigator>
    );
}

export default Router;
