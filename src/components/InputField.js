import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
        gap: 5,
      }}>
      {icon}
      <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        secureTextEntry={inputType === 'password' ? true : false}
        style={{flex: 1, paddingVertical: 0}}
      />
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
