import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export { default as CallScreen } from '@/screens/Call';
export { default as RegisterScreen } from '@/screens/Register';

export type CallScreenProps = {
    MakeCall: undefined;
    Calling: undefined;
    Incoming: undefined;
    Connected: undefined;
};

export type ScreenProps = {
    Call: NavigatorScreenParams<CallScreenProps>;
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
