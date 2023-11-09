import { COLOURS, formStyle } from '@/styles';
import { forwardRef } from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

const Input = forwardRef<TextInput, TextInputProps>(
    ({ style, ...props }, ref) => {
        const styles = StyleSheet.compose(formStyle.input, style);

        return (
            <TextInput
                ref={ref}
                style={styles}
                placeholderTextColor={COLOURS.SECONDARY}
                cursorColor={COLOURS.PRIMARY}
                {...props}
            />
        );
    },
);
Input.displayName = 'Input';

export { Input };
