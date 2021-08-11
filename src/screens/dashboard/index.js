import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-easy-icon';

export const Dashboard = props => {
  // console.log('Props:', props);
  const GoBack = () => {
    // console.log('Inner Props:', props);
    return props.navigation.goBack();
  };

  const myexpense = [];
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [total, setTotal] = useState(0);

  const AddExpense = () => {
    let expense = myexpense;

    setTotal(total + parseInt(itemPrice));
    let object = {
      itemName: itemName,
      itemPrice: itemPrice,
    };
    console.log('Object', object);
    myexpense.push(object);
    console.log('Array', myexpense);
    console.log('myExpense', myexpense);

    console.log('Total', total);
  };

  return (
    <LinearGradient
      colors={['#141E30', '#808080', '#243B55']}
      useAngle={true}
      angle={45}
      style={{flex: 1, padding: 10}}>
      <ScrollView>
        <View
          style={{
            flex: 0.06,
            // backgroundColor: 'pink',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.25,
              backgroundColor: '#cccccc',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
            onPress={() => GoBack()}>
            <Icon
              type="ionicon"
              name="md-return-up-back-outline"
              color="black"
              size={35}
              style={{marginBottom: 3}}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 0.75,
              //  backgroundColor: 'blue'
            }}></View>
        </View>

        <View
          style={{
            flex: 0.3,
            //  backgroundColor: 'yellow'
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 38,
              // textTransform: 'capitalize',
              textAlign: 'center',
              fontWeight: '700',
              fontStyle: 'italic',
              marginTop: 5,
            }}>
            List of Expense
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              textTransform: 'capitalize',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Add your expense
          </Text>
          <TextInput
            style={styles.Textinput}
            placeholder="Expense:"
            placeholderTextColor="grey"
            onChangeText={val => setItemName(val)}
          />
          <TextInput
            style={styles.Textinput}
            placeholder="Price:"
            placeholderTextColor="grey"
            onChangeText={val => setItemPrice(val)}
            keyboardType="number-pad"
          />
          {/* {console.log('Expense:', itemName)} */}
          {/* {console.log('Price:', itemPrice)} */}
        </View>
        <View
          style={{
            flex: 0.15,
            // backgroundColor: 'lawngreen',
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View
            style={{
              flex: 1,
              //  backgroundColor: 'red'
            }}></View>
          <View
            style={{
              flex: 0.5,
              // backgroundColor: 'yellow',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="ionicon"
              name="ios-add-circle-outline"
              color="#FFFFFF"
              size={50}
              onPress={() => AddExpense()}
            />
          </View>
          <View
            style={{
              flex: 1,
              //  backgroundColor: 'red'
            }}></View>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 40}}>
          <Text
            style={{
              height: 30,
              flex: 1,
              fontSize: 20,
              color: 'white',
            }}>
            {itemName}
          </Text>
          <Text
            style={{
              height: 30,
              flex: 1,
              fontSize: 20,
              color: 'white',
            }}>
            {itemPrice}
          </Text>
          <TouchableOpacity
          // onPress={() => {
          //   deleteitem(index);
          // }}
          >
            <Icon
              type="ionicon"
              name="close-circle-outline"
              color="white"
              size={25}
              style={{flex: 1}}
            />
          </TouchableOpacity>
        </View>

        <Text style={{fontSize: 20, color: 'white', paddingLeft: '70%'}}>
          Total:{total}
        </Text>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Textinput: {
    marginTop: 20,
    height: 50,
    width: '85%',
    fontSize: 15,
    color: 'grey',
    paddingVertical: 10,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    fontSize: 18,
  },
});
