import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import LoginSVG from '../assets/images/misc/login.svg';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LoginSVG
            width={300}
            height={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: 500,
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
