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
    buttonText: {
        alignSelf: 'center',
        color: COLOURS.BACKGROUND,
    },
} as const);

export const style = StyleSheet.create({
    screen: {
        backgroundColor: COLOURS.BACKGROUND,
        ...utilityStyle.fullHeight,
    },
    exampleForm: {
        marginHorizontal: 20,
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
