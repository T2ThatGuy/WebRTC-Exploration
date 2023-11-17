import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@ui/Input';
import { Button } from '@ui/Button';
import { Form, FormField, FormItem, FormLabel } from '@ui/Form';
import { DEFAULT_CREDENTIALS } from '@/constants';
import { useAculabCloud } from '@providers/AculabCloud';
import { useNavigation } from '@react-navigation/native';
import { CallNavigationProps } from '@/screens';
import { useState } from 'react';
import { View } from 'react-native';

const formSchema = z.object({
    webRTCAccessKey: z.string().min(1),
    apiAccessKey: z.string().min(1),
    cloudRegionId: z.string().min(1),
    cloudUsername: z.string().min(1),
    logLevel: z.string().min(1).max(1),
    registerClientId: z.string(),
});
type FormSchemaType = z.infer<typeof formSchema>;

function RegisterForm() {
    const { register } = useAculabCloud();
    const navigation = useNavigation<CallNavigationProps>();
    const form = useForm<FormSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(formSchema),
    });

    const [hideValues, setHideValues] = useState(true);
    const onSubmit = async (data: FormSchemaType) => {
        const res = await register(data);

        if (res) {
            navigation.navigate('Call');
        }
    };

    return (
        <Form {...form}>
            <FormField
                name="apiAccessKey"
                control={form.control}
                defaultValue={DEFAULT_CREDENTIALS.apiAccessKey}
                render={({ field }) => {
                    const { onChange, ...props } = field;

                    return (
                        <FormItem>
                            <FormLabel>Api Access Key</FormLabel>
                            <Input
                                onChangeText={onChange}
                                placeholder="Access Key"
                                secureTextEntry={hideValues}
                                {...props}
                            />
                        </FormItem>
                    );
                }}
            />
            <FormField
                name="webRTCAccessKey"
                control={form.control}
                defaultValue={DEFAULT_CREDENTIALS.webRTCAccessKey}
                render={({ field }) => {
                    const { onChange, ...props } = field;

                    return (
                        <FormItem>
                            <FormLabel>Web RTC Access Key</FormLabel>
                            <Input
                                onChangeText={onChange}
                                secureTextEntry={hideValues}
                                placeholder="Web RTC Access Key"
                                {...props}
                            />
                        </FormItem>
                    );
                }}
            />
            <FormField
                name="cloudRegionId"
                control={form.control}
                defaultValue={DEFAULT_CREDENTIALS.cloudRegionId}
                render={({ field }) => {
                    const { onChange, ...props } = field;

                    return (
                        <FormItem>
                            <FormLabel>Cloud Region ID</FormLabel>
                            <Input
                                placeholder="Cloud Region ID"
                                onChangeText={onChange}
                                {...props}
                            />
                        </FormItem>
                    );
                }}
            />
            <FormField
                name="cloudUsername"
                control={form.control}
                defaultValue={DEFAULT_CREDENTIALS.cloudUsername}
                render={({ field }) => {
                    const { onChange, ...props } = field;

                    return (
                        <FormItem>
                            <FormLabel>Cloud Username</FormLabel>
                            <Input
                                placeholder="Cloud Username"
                                onChangeText={onChange}
                                {...props}
                            />
                        </FormItem>
                    );
                }}
            />
            <FormField
                name="logLevel"
                control={form.control}
                defaultValue={DEFAULT_CREDENTIALS.logLevel}
                render={({ field }) => {
                    const { onChange, ...props } = field;

                    return (
                        <FormItem>
                            <FormLabel>Log Level</FormLabel>
                            <Input
                                placeholder="Log Level"
                                onChangeText={onChange}
                                {...props}
                            />
                        </FormItem>
                    );
                }}
            />
            <FormField
                name="registerClientId"
                control={form.control}
                defaultValue={DEFAULT_CREDENTIALS.registerClientId}
                render={({ field }) => {
                    const { onChange, ...props } = field;

                    return (
                        <FormItem>
                            <FormLabel>Register Client ID</FormLabel>
                            <Input
                                placeholder="Register Client ID"
                                onChangeText={onChange}
                                {...props}
                            />
                        </FormItem>
                    );
                }}
            />
            <View
                style={{
                    gap: 8,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Button
                    onPress={form.handleSubmit(onSubmit)}
                    label="Register"
                />
                <Button
                    label="Toggle Field Visibility"
                    onPress={() => setHideValues((prev) => !prev)}
                />
            </View>
        </Form>
    );
}

export default RegisterForm;
