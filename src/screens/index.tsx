import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export { default as HomeScreen } from '@/screens/Home';
export { default as RegisterScreen } from '@/screens/Register';

export type ScreenProps = {
    Home: undefined;
    Register: undefined;
};

export type HomeNavigationProps = NativeStackNavigationProp<
    ScreenProps,
    'Home'
>;
export type RegisterNavigationProps = NativeStackNavigationProp<
    ScreenProps,
    'Register'
>;
