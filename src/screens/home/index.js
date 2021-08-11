import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-easy-icon';
export const Home = props => {
  const [uName, setuName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  // console.log('Props:', props);

  const GotoDashboard = () => {
    // console.log('Props in Function:', props);
    return props.navigation.navigate('Dashboard');
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={['#141E30', '#808080', '#243B55']}
        useAngle={true}
        angle={135}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1.5,
            // backgroundColor: 'yellow',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/wallet.png')}
            style={{height: 250, width: 200, marginTop: 20}}
          />
        </View>
        <View
          style={{
            flex: 0.4,
            // backgroundColor: 'red',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 38,
              textTransform: 'capitalize',
              textAlign: 'center',
              fontWeight: '700',
              fontStyle: 'italic',
            }}>
            expense manager
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            //  backgroundColor: 'pink'
          }}>
          <TextInput
            placeholder="User Name"
            placeholderTextColor="#E6E6E6"
            onChangeText={val => setuName(val)}
            style={styles.textinputs}
          />

          {/* {console.log('User Name:', uName)} */}

          <View
            style={{
              marginTop: 20,
              height: 50,
              width: '85%',
              alignSelf: 'center',
              borderRadius: 50,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#E6E6E6"
              secureTextEntry={showPassword}
              onChangeText={val => setPassword(val)}
              style={[styles.textinputs, {flex: 0.8, marginTop: 0}]}
            />
            <Icon
              type="ionicon"
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              color="#E6E6E6"
              size={20}
              style={{
                flex: 0.2,
                // backgroundColor: 'red',
                marginLeft: 60,
              }}
              onPress={() => setShowPassword(!showPassword)}
            />
            {/* {console.log('Password:', password)} */}
          </View>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 38,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => GotoDashboard()}>
            <LinearGradient
              style={[styles.button, {alignSelf: 'center', width: '98%'}]}
              colors={['#6f0000', '#200122', '#6f0000']}
              useAngle={true}
              angle={5}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontStyle: 'italic',
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                Verify
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textinputs: {
    marginTop: 20,
    height: 50,
    width: '85%',
    // borderWidth: 2,
    // borderColor:'',
    fontSize: 15,
    color: 'grey',
    paddingVertical: 10,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    fontSize: 18,
  },

  button: {
    height: 60,
    width: '95%',
    // backgroundColor: 'blue',
    borderRadius: 50,
    justifyContent: 'center',
  },
});
