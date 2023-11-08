import { StyleSheet } from 'react-native';

export const COLOURS = {
    BACKGROUND: '#37383D',
} as const;

export const utilityStyle = StyleSheet.create({
    fullHeight: {
        height: '100%',
    },
} as const);

export const style = StyleSheet.create({
    screen: {
        backgroundColor: COLOURS.BACKGROUND,
        ...utilityStyle.fullHeight,
    },
} as const);
