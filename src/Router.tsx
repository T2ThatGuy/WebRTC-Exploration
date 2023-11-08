import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLOURS } from '@/styles';
import { HomeScreen, RegisterScreen } from '@/screens';

const Stack = createNativeStackNavigator();

function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home Screen',
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: COLOURS.BACKGROUND },
                }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: 'Register Screen' }}
            />
        </Stack.Navigator>
    );
}

export default Router;
