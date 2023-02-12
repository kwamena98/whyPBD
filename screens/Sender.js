import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, TouchableHighlight,Clipboard,ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Clipboard from '@react-native-clipboard/clipboard';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
const CreateOrderScreen = () => {
    const [code, setCode] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleCreateCode = async () => {
      // Code to generate a unique code and store product name and price information
      const generatedCode = 'ABCDEFGH';
      setCode(generatedCode);
      setModalVisible(true);
    };
  
    const handleCopyCode = async () => {
      await Clipboard.setString(code);
    };


    return (
      <View style={styles.container}>
  
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          value={productName}
          onChangeText={setProductName}
        />
        <TextInput
          style={styles.input}
          placeholder="Price To Pay In GHS"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleCreateCode}>
          <Text style={styles.buttonText}>Generate Code</Text>
        </TouchableOpacity>
  
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeaderText}>Generated Code</Text>
            <Text style={styles.codeText}>{code}</Text>
            <TouchableHighlight
              style={styles.copyButton}
              onPress={handleCopyCode}
            >
              <Text style={styles.copyButtonText}>Copy Code</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  };
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius:30,
      marginVertical: 10,

    },
    button: {
      backgroundColor: '#333',
      padding: 10,
      borderRadius: 30,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalHeaderText: {
      fontSize: 24,
      marginBottom: 20,
    },
    codeText: {
      fontSize: 18,
      marginBottom: 20,
    },
    copyButton: {
      backgroundColor: '#333',
      padding: 10,
      borderRadius: 5,
    },
    copyButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
  });





const  OrdersScreen= () => {
  return (



    <ScrollView>
       <StatusBar style="light" />
        <View style={stylest.stepInnerContainer}>
          <Text style={{fontWeight:'bold'}}>
               Order Code AB6712
          </Text>
          </View>
      
    <View style={stylest.container}>
      <View style={stylest.stepContainer}>
        <View style={stylest.stepInnerContainer}>
          <View style={stylest.stepNumberContainer}>
            <Text style={stylest.stepNumber}>1</Text>
          </View>
          <Text style={stylest.stepText}>Confirmed</Text>
          {/* <Text style={stylest.stepText}>Confirmed by user</Text> */}
          <Ionicons name="checkmark"  size='25' color='green' />
          
          
          
        </View>
      </View>

      <View style={stylest.stepContainer}>
        <View style={stylest.stepInnerContainer}>
          <View style={stylest.stepNumberContainer}>
            <Text style={stylest.stepNumber}>2</Text>
          </View>
          <Text style={stylest.stepText}>Delivered</Text>
          <Ionicons name="checkmark"  size='25' color='green' />
        </View>
      </View>

      <View style={stylest.stepContainer}>
        <View style={stylest.stepInnerContainer}>
          <View style={stylest.stepNumberContainer}>
            <Text style={stylest.stepNumber}>3</Text>
          </View>
          <Text style={stylest.stepText}>Review</Text>

          <View style={stylest.stepInnerContainer}>
          <Text>
               Nice working with you Sir you helped me Would work with you more 
          </Text>
          </View>
          
        </View>
      </View>

      <View style={stylest.stepContainer}>
        <View style={stylest.stepInnerContainer}>
          <View style={stylest.stepNumberContainer}>
            <Text style={stylest.stepNumber}>4</Text>
          </View>
          <Text style={stylest.stepText}>Paid</Text>
          <Ionicons name="checkmark"  size='25' color='green' />
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const stylest = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
    marginTop: 20
  },
  stepInnerContainer: {
    borderWidth: 1,
    width:'100%',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  stepNumberContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepNumber: {
    color: '#fff',
    fontWeight: 'bold'
  },
  stepText: {
    marginLeft: 20,
    fontWeight: 'bold'
  }
});


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  
  return(
  <Tab.Navigator>
    <Tab.Screen
      name="Create Order"
      component={CreateOrderScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="ios-create" size='30' color='#333' />
        ),
      }}
    />
    <Tab.Screen
      name="Orders"
      component={OrdersScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="ios-list"  size='30' color='#333' />
        ),
      }}
    />
  </Tab.Navigator>
  
  
    )};

export default TabNavigator;