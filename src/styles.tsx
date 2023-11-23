import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

export const COLOURS = {
    // BACKGROUND: '#37383D',
    BACKGROUND: 'hsl(240, 10%, 4%)',
    DANGER: 'hsl(0 100% 50%)',
    MUTED: 'hsl(240, 4%, 56%)',
    CARD: 'hsl(0 0% 100%)',
    BORDER: 'hsl(214.3 31.8% 91.4%)',
    INPUT_BORDER: 'hsl(214.3 31.8% 91.4%)',
    PRIMARY: 'hsl(240, 1%, 76%)',
    SECONDARY: 'hsl(240, 3%, 51%)',
    WHITE: 'white',
} as const;

export const utilityStyle = StyleSheet.create({
    fullHeight: {
        height: '100%',
    },
    destructiveText: {
        color: COLOURS.DANGER,
    },
} as const);

export const componentStyle = StyleSheet.create({
    button: {
        padding: 10,
        elevation: 8,
        width: 'auto',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    headerBackButton: {
        padding: 0,
        elevation: 0,
        backgroundColor: undefined,
    },
    buttonText: {
        alignSelf: 'center',
        color: COLOURS.BACKGROUND,
    },
} as const);

export const buttonStyle = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        zIndex: 10,
        flexDirection: 'row',
        gap: 10,
    },
    button: {
        borderRadius: 100,
        width: 50,
        height: 50,
        elevation: 8,
    },
    icon: {
        alignSelf: 'center',
    },
} as const);

export const style = StyleSheet.create({
    screen: {
        backgroundColor: COLOURS.BACKGROUND,
        ...utilityStyle.fullHeight,
    },
    formPage: {
        marginHorizontal: 20,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    callingText: {
        fontSize: 25,
        marginVertical: 20,
        color: COLOURS.PRIMARY,
    },
} as const);

export const formStyle = StyleSheet.create({
    item: {
        marginVertical: 8,
    },
    label: {
        color: COLOURS.PRIMARY,
    },
    description: {
        color: COLOURS.MUTED,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: COLOURS.PRIMARY,
        borderColor: COLOURS.INPUT_BORDER,
    },
    errorLabel: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'bold',
    },
} as const);

export const HeaderStyling: NativeStackNavigationOptions = {
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: COLOURS.BACKGROUND,
    },
} as const;
