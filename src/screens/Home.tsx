import { SafeAreaView, Text } from 'react-native';

import { COLOURS, style } from '@/styles';
import { useAculabCloud } from '@/providers/AculabCloud';

function HomeScreen() {
    const { webRTCToken } = useAculabCloud();

    return (
        <SafeAreaView style={style.screen}>
            <Text style={{ color: COLOURS.PRIMARY }}>{webRTCToken}</Text>
        </SafeAreaView>
    );
}

export default HomeScreen;
