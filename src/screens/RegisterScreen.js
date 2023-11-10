import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

import RegistrationSVG from '../assets/images/misc/registration.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

const RegisterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <RegistrationSVG
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
          Register
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
        <Text style={{textAlign: 'center', color: '#667', marginBottom: 30}}>
          Or, register with email
        </Text>
        <InputField
          label={'Full Name'}
          icon={<Ionicon name="person-outline" size={22} color="#666" />}
        />
        <InputField
          label={'Email'}
          icon={<MaterialIcon name="alternate-email" size={22} color="#666" />}
          keyboardType={'email-address'}
        />
        <InputField
          label={'Password'}
          icon={<Ionicon name="lock-closed-outline" size={22} color="#666" />}
          inputType={'password'}
        />
        <InputField
          label={'Confirm Password'}
          icon={<Ionicon name="lock-closed-outline" size={22} color="#666" />}
          inputType={'password'}
        />
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
            gap: 5,
            alignItems: 'center',
          }}>
          <Ionicon name="calendar-outline" size={22} color="#666" />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{color: '#666', marginTop: 5}}>{dobLabel}</Text>
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1970-01-01')}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDobLabel(date.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <CustomButton label={'Register'} onPress={() => {}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 5,
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
