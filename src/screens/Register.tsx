import RegisterForm from '@/components/forms/Register';
import { style } from '@/styles';
import { View, SafeAreaView } from 'react-native';

function RegisterScreen() {
    return (
        <SafeAreaView style={style.screen}>
            <View style={style.exampleForm}>
                <RegisterForm />
            </View>
        </SafeAreaView>
    );
}

export default RegisterScreen;
