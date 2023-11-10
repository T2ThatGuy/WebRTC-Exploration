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
    const styles = StyleSheet.compose(componentStyle.button, style);
    const Con = children ? (
        children
    ) : (
        <Text style={componentStyle.buttonText}>{label || ''}</Text>
    );

    return (
        <TouchableOpacity ref={ref} style={styles} {...props}>
            {Con}
        </TouchableOpacity>
    );
});

export { Button };
