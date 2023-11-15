import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export { default as CallScreen } from '@/screens/Call';
export { default as RegisterScreen } from '@/screens/Register';

export type ScreenProps = {
    Call: undefined;
    Register: undefined;
};

export type CallNavigationProps = NativeStackNavigationProp<
    ScreenProps,
    'Call'
>;
export type RegisterNavigationProps = NativeStackNavigationProp<
    ScreenProps,
    'Register'
>;
