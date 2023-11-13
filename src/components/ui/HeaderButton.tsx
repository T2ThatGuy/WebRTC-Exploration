import { forwardRef } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { COLOURS, componentStyle } from '@/styles';
import { Button, ButtonProps } from '@ui/Button';
import { useNavigation } from '@react-navigation/native';
import { AculabBaseClass } from '@aculab-com/react-native-aculab-client';

const HeaderButton = forwardRef<
    TouchableOpacity,
    Omit<ButtonProps, 'children'>
>(({ style, onPress, ...props }, ref) => {
    const navigation = useNavigation();
    const styles = StyleSheet.compose(componentStyle.headerBackButton, style);

    return (
        <Button
            ref={ref}
            style={styles}
            onPress={(e) => {
                onPress?.(e);
                navigation.goBack();
            }}
            {...props}>
            <MaterialIcon
                name="arrow-back"
                size={20}
                style={{ color: COLOURS.WHITE }}
            />
        </Button>
    );
});

const HeaderBackButton = () => (
    <HeaderButton onPress={() => AculabBaseClass.unregister()} />
);

export default HeaderBackButton;
