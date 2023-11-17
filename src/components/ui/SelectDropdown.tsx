import { COLOURS } from '@/styles';
import { StyleSheet } from 'react-native';
import RNSelectDropdown from 'react-native-select-dropdown';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

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
            dropdownStyle={style.dropdown}
            rowStyle={style.rowStyle}
            rowTextStyle={style.rowTxtStyle}
            renderDropdownIcon={(isOpened) => {
                return (
                    <MaterialIcon
                        name={
                            isOpened
                                ? 'keyboard-arrow-up'
                                : 'keyboard-arrow-down'
                        }
                        color={COLOURS.PRIMARY}
                        size={18}
                    />
                );
            }}
        />
    );
}

export { SelectDropdown };

export const style = StyleSheet.create({
    button: {
        width: 'auto',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOURS.INPUT_BORDER,
        backgroundColor: undefined,
    },
    buttonText: {
        color: COLOURS.PRIMARY,
        textAlign: 'left',
        fontSize: 14,
        marginHorizontal: 0,
    },
    dropdown: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderColor: COLOURS.PRIMARY,
        borderWidth: 1,
        backgroundColor: COLOURS.BACKGROUND,
    },
    rowStyle: {
        backgroundColor: COLOURS.BACKGROUND,
        borderBottomColor: COLOURS.PRIMARY,
    },
    rowTxtStyle: {
        color: COLOURS.PRIMARY,
        textAlign: 'center',
        fontWeight: 'bold',
    },
} as const);
