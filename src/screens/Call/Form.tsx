import { SafeAreaView } from 'react-native';

import { style } from '@/styles';
import MakeCall from '@/components/forms/MakeCall';

function Form() {
    return (
        <SafeAreaView style={style.screen}>
            <MakeCall />
        </SafeAreaView>
    );
}

export default Form;
