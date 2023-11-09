import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@ui/Input';
import { Button } from '@ui/Button';
import {
    Form,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@ui/Form';

const formSchema = z.object({
    hello: z.string().min(8, { message: 'Hello input not long enough' }),
    world: z.string(),
});
type FormSchemaType = z.infer<typeof formSchema>;

export function TestForm() {
    const form = useForm<FormSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (values: FormSchemaType) => console.log(values);

    return (
        <Form {...form}>
            <FormField
                name="hello"
                defaultValue=""
                control={form.control}
                render={({ field }) => {
                    const { onChange, ...props } = field;

                    return (
                        <FormItem>
                            <FormLabel>Hello</FormLabel>
                            <Input
                                placeholder="example"
                                onChangeText={onChange}
                                {...props}
                            />
                            <FormDescription>
                                Example Form Description
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    );
                }}
            />
            <FormField
                name="world"
                defaultValue=""
                control={form.control}
                render={({ field }) => {
                    const { onChange, ...props } = field;

                    return (
                        <FormItem>
                            <FormLabel>World</FormLabel>
                            <Input
                                placeholder="World Example"
                                onChangeText={onChange}
                                {...props}
                            />
                            <FormMessage />
                        </FormItem>
                    );
                }}
            />
            <Button onPress={form.handleSubmit(onSubmit)} label="Submit" />
        </Form>
    );
}
