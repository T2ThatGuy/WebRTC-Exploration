import { forwardRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Button, ButtonProps } from '@ui/Button';
import { COLOURS, componentStyle } from '@/styles';
import { useAculabCloud } from '@providers/AculabCloud';
import { CallNavigationProps } from '@/screens';

const HeaderButton = forwardRef<
    TouchableOpacity,
    Omit<ButtonProps, 'children'>
>(({ style, ...props }, ref) => {
    const styles = StyleSheet.compose(componentStyle.headerBackButton, style);

    return (
        <Button ref={ref} style={styles} {...props}>
            <MaterialIcon
                name="arrow-back"
                size={20}
                style={{ color: COLOURS.WHITE }}
            />
        </Button>
    );
});

const HeaderBackButton = () => {
    const navigation = useNavigation();
    const { unregister } = useAculabCloud();

    return (
        <HeaderButton
            onPress={() => {
                unregister();
                navigation.goBack();
            }}
        />
    );
};

const HeaderUnregisterButton = () => {
    const navigation = useNavigation<CallNavigationProps>();
    const { unregister } = useAculabCloud();

    return (
        <HeaderButton
            onPress={() => {
                unregister();
                navigation.navigate('Register');
            }}
        />
    );
};

export { HeaderBackButton, HeaderUnregisterButton };
