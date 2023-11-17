import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CallScreenProps } from '@/screens/Call';

// Props
export type { CallScreenProps };
export type ScreenProps = {
    Call: NavigatorScreenParams<CallScreenProps>;
    Register: undefined;
};

// useNavigation types
export type CallNavigationProps = NativeStackNavigationProp<
    ScreenProps,
    'Call'
>;
export type RegisterNavigationProps = NativeStackNavigationProp<
    ScreenProps,
    'Register'
>;

export { default as CallScreen } from '@/screens/Call';
export { default as RegisterScreen } from '@/screens/Register';
