// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';



// import { NavigationContainer } from '@react-navigation/native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import TabNavigator from './screens/Sender';


// const Stack = createBottomTabNavigator();


// export default function App() {
//   return (
//     <SafeAreaView style={{ flex: 1 }} >
//     <StatusBar barStyle={'light-content'} />
//     <NavigationContainer>
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
        
//       }}
//       initialRouteName=" "
//     >
//         <Stack.Screen  screenOptions={{tabBarVisible: false }}  name=" " component={TabNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });






import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sender from './screens/Sender';
import Receiver from './screens/Receiver';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  
            name="Receiver" 
            component={Receiver} 
            options={{
              headerShown: false
            }} 
            initialRouteName="Receiver"
        />

        <Stack.Screen  
            name="Sender" 
            component={Sender} 
            options={{
              headerShown: false
            }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
 
  );
};

export default App;