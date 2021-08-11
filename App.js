import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/screens/home';
import {Dashboard} from './src/screens/dashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
