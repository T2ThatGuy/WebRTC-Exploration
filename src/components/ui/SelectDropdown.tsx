import { COLOURS } from '@/styles';
import { StyleSheet } from 'react-native';
import RNSelectDropdown from 'react-native-select-dropdown';

type SelectDropdownProps<TData extends unknown> = {
    data: TData[];
    onSelect: (value: TData) => void;
    defaultText?: string;
    defaultValue?: TData;
};

function SelectDropdown<T extends unknown>({
    data,
    defaultText,
    defaultValue,
    onSelect,
}: SelectDropdownProps<T>) {
    return (
        <RNSelectDropdown
            data={data}
            onSelect={onSelect}
            defaultValue={defaultValue}
            // Button
            defaultButtonText={defaultText}
            buttonStyle={style.button}
            buttonTextStyle={style.buttonText}
            // Dropdown
        />
    );
}

export { SelectDropdown };

export const style = StyleSheet.create({
    button: {
        padding: 10,
        elevation: 8,
        width: 'auto',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: undefined,
    },
    buttonText: {
        color: COLOURS.PRIMARY,
        textAlign: 'left',
    },
} as const);
