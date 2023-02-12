import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView ,TextInput,StyleSheet,TouchableOpacity,Button,Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native';

export default function Receiver() {
    const [Ordercode, setOrderCode] = useState('12345');
    const [orderDetails, setOrderDetails] = useState(null);

    
    // const [productName, setProductName] = useState('');

    const handleSubmit = () => {
      // Logic to fetch order details from server based on the order code
      const details = {
        Ordercode: Ordercode,
        productName: 'Lip Balm',
        senderName: 'Greek God',
        senderPhone: '+233 123 456 789',
        price:'GHC200'
      };
      setOrderDetails(details);
    };
  
    return (
        
    <SafeAreaView style={{ flex: 1 }}>
         <StatusBar style="light" />
        
    <View style={styles.headerContainer}>
            <TouchableOpacity>
            <Image
                source={{uri:'https://www.upwork.com/profile-portraits/c1BIrM6S5nvGzJqp35aYVsPWTnuIEnR5hv5mCueK_GQucO2ZGPCizvlS-OICiEKg7P'}}
                style={styles.logo}
            />
            </TouchableOpacity>
            <Text style={styles.headerText}>Receiver</Text>
      
    
    </View>
    

    <View style={styles.container}>
            <TextInput
                    style={styles.input}
                    placeholder="Order Number"
                    value={Ordercode}
                    onChangeText={setOrderCode}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
  
      
        
        
        {orderDetails && (
    
    <View style={styles.orderDetailsContainer}>
           
        <View style={styles.stepInnerContainer}>
          <Text style={{fontWeight:'bold'}}>
          Order Code: {orderDetails.Ordercode} 
          </Text>
        </View>
        <View style={{margin:5}}></View>
               
        <View style={styles.stepInnerContainer}>
          <Text style={{fontWeight:'bold'}}>
          Price: {orderDetails.price}
          </Text>
        </View>

        <View style={{margin:5}}></View>

        <View style={styles.stepInnerContainer}>
        <Text style={{fontWeight:'bold'}}>
          Product Name: {orderDetails.productName}
          </Text>
        </View>
        <View style={{margin:5}}></View>

        <View style={styles.stepInnerContainer}>
        <Text style={{fontWeight:'bold'}}>
          Sender Name: {orderDetails.senderName}
          </Text>
        </View>
        <View style={{margin:5}}></View>
        
        <View style={styles.stepInnerContainer}>
        <Text style={{fontWeight:'bold'}}>
          Sender Phone: {orderDetails.senderPhone}
          </Text>
        </View>
        <View style={{margin:5}}></View>
        <TouchableOpacity style={styles.buttonx} onPress={()=>Alert.alert("Thanks for Confirming The Order")}>
                <Text style={styles.buttonText}>Confirm
                <Ionicons name="arrow-forward"  size='22' color='white' />
                </Text>
                
        </TouchableOpacity>
            
        <View style={{margin:5}}></View>
      
    </View>

          
        )}
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      padding: 16,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },

    headerContainer: {
        backgroundColor: '#ffff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius:30,
    },
    headerText: {
        color: 'black',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
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
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius:30,
      marginVertical: 10,

    },
    
    buttonContainer: {
      width: '100%',
      marginVertical: 16,
    },
    orderDetailsContainer: {
    //   marginTop: 40,
      borderRadius:30,
      padding: 16,
      backgroundColor: '#eee',
      width: '100%',
      height:'40%'
    },
    button: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 30,
      },

      buttonx: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 30,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
      },
  });
  