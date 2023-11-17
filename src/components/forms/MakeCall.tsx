import { useState } from 'react';
import { Text, View } from 'react-native';

import { Input } from '@ui/Input';
import { Button } from '@ui/Button';
import { COLOURS, formStyle, style } from '@/styles';
import { SelectDropdown } from '@ui/SelectDropdown';
import { CallType, useCallSettings } from '@providers/CallSettings';

function MakeCall() {
    const { makeCall, webRTCState, callType, isOutbound, callId } =
        useCallSettings();

    const [clientId, setClientId] = useState('');
    const [targetCallType, setTargetCallType] = useState<CallType>('client');
    const callTypes: CallType[] = ['client', 'service'];

    return (
        <View style={style.formPage}>
            <Text style={{ color: COLOURS.PRIMARY }}>{webRTCState}</Text>
            <Text style={{ color: COLOURS.PRIMARY }}>{String(callType)}</Text>
            <Text style={{ color: COLOURS.PRIMARY }}>{String(isOutbound)}</Text>
            <Text style={{ color: COLOURS.PRIMARY }}>{String(callId)}</Text>

            <View style={formStyle.item}>
                <Text style={formStyle.label}>Call Type</Text>
                <SelectDropdown
                    data={callTypes}
                    onSelect={setTargetCallType}
                    defaultValue={targetCallType}
                    defaultText="Select call type"
                />
            </View>

            <View style={formStyle.item}>
                <Text style={formStyle.label}>
                    {targetCallType === 'client' ? 'Client ID' : 'Service ID'}
                </Text>
                <Input
                    placeholder="id"
                    onChangeText={(value) => setClientId(value)}
                />
            </View>

            <Button
                label="Start Call"
                onPress={() => makeCall(targetCallType, clientId)}
            />
        </View>
    );
}

export default MakeCall;
