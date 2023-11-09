import { forwardRef } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

import { componentStyle } from '@/styles';

const Button = forwardRef<
    TouchableOpacity,
    TouchableOpacityProps & { label?: string }
>(({ style, children, label, ...props }, ref) => {
    const Con = children ? children : <Text>{label || ''}</Text>;
    const styles = StyleSheet.compose(componentStyle.button, style);

    return (
        <TouchableOpacity ref={ref} style={styles} {...props}>
            {Con}
        </TouchableOpacity>
    );
});

export { Button };
