import { SafeAreaView, View } from 'react-native';

import { style } from '@/styles';
import { TestForm } from '@components/forms/Test';

function Home() {
    return (
        <SafeAreaView style={style.screen}>
            {/* <Text style={{ color: COLOURS.PRIMARY }}>Home Page</Text> */}

            <View style={style.exampleForm}>
                <TestForm />
            </View>
        </SafeAreaView>
    );
}

export default Home;
