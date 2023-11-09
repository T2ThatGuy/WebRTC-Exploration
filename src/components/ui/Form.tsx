import { StyleSheet, Text, TextProps, View, ViewProps } from 'react-native';
import { createContext, forwardRef, useContext, useId } from 'react';
import {
    Controller,
    ControllerProps,
    FieldPath,
    FieldValues,
    FormProvider,
    useFormContext,
} from 'react-hook-form';
import { formStyle, utilityStyle } from '@/styles';

const Form = FormProvider;

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
    {} as FormFieldContextValue,
);

const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
}: ControllerProps<TFieldValues, TName>) => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    );
};

const useFormField = () => {
    const fieldContext = useContext(FormFieldContext);
    const itemContext = useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();

    const fieldState = getFieldState(fieldContext.name, formState);

    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>');
    }

    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};

type FormItemContextValue = {
    id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
    {} as FormItemContextValue,
);

const FormItem = forwardRef<View, ViewProps>(({ style, ...props }, ref) => {
    const id = useId();
    const styles = StyleSheet.compose(formStyle.item, style);

    return (
        <FormItemContext.Provider value={{ id }}>
            <View ref={ref} style={styles} {...props} />
        </FormItemContext.Provider>
    );
});
FormItem.displayName = 'FormItem';

const FormLabel = forwardRef<Text, TextProps>(({ style, ...props }, ref) => {
    const { error, formItemId } = useFormField();
    const styles = StyleSheet.compose(
        StyleSheet.compose(
            formStyle.label,
            error ? utilityStyle.destructiveText : undefined,
        ),
        style,
    );

    return <Text ref={ref} style={styles} id={formItemId} {...props} />;
});
FormLabel.displayName = 'FormLabel';

const FormDescription = forwardRef<Text, TextProps>(
    ({ style, ...props }, ref) => {
        const { formDescriptionId } = useFormField();
        const styles = StyleSheet.compose(formStyle.description, style);

        /* TODO: Add default styling for small text and muted colour */
        return (
            <Text ref={ref} id={formDescriptionId} style={styles} {...props} />
        );
    },
);
FormDescription.displayName = 'FormDescription';

const FormMessage = forwardRef<Text, TextProps>(
    ({ style, children, ...props }, ref) => {
        const { error, formMessageId } = useFormField();
        const body = error ? String(error.message) : children;

        return (
            /* TODO: Add default styling for small text, red colour and medium/bold font */
            <Text ref={ref} id={formMessageId} style={style} {...props}>
                {body}
            </Text>
        );
    },
);
FormMessage.displayName = 'FormMessage';

export {
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormField,
    FormMessage,
    FormDescription,
};
