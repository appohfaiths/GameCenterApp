import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

import LoginSVG from '../assets/images/misc/login.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

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
        <InputField
          label={'Email'}
          icon={<MaterialIcon name="alternate-email" size={22} color="#666" />}
          keyboardType={'email-address'}
        />
        <InputField
          label={'Password'}
          icon={<Ionicon name="lock-closed-outline" size={22} color="#666" />}
          inputType={'password'}
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
        />
        <CustomButton label={'Login'} onPress={() => {}} />
        <Text style={{textAlign: 'center', color: '#667', marginBottom: 30}}>
          Or, login with...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 5,
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
