import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import { FONTS, SIZES } from "../constants";

const CateButton = ({
    contentContainerStyle,
    disabled,
    label,
    labelStyle,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFCACA',
                borderRadius: 5
            }}
            disabled={disabled}
            onPress={onPress}
        > 
            <Text style={{ color: '#636363', ...FONTS.h4, ...labelStyle,
          paddingHorizontal:10,
        //   marginHorizontal: 3,
        //   marginVertical: 2
        paddingVertical: 2
           }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default CateButton;