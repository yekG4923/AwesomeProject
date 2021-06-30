/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
 import Icon from 'react-native-vector-icons/FontAwesome';
 import { Input,Button,FAB,Image } from 'react-native-elements'
 import React from 'react';
 import type {Node} from 'react';
 import {TextInput,SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
 import firestore from '@react-native-firebase/firestore';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App: () => Node = () => {
   firestore().collection('Users').doc('ABC').get().then((user) => {
     console.log(user)
   })
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
        <ScrollView>
       <Input placeholder="Hint"></Input>
       <Text style={{fontSize:20}}>gg gaming</Text>
       <TextInput style={{backgroundColor:"#DDDDDD"}} keyboardType="default"></TextInput>
       <Button
        icon={
          <Icon
          name="arrow-right"
          size={15}
          color="white"
          />
        }
        iconRight
       title="Button with right icon"
      />
      <FAB title="Create" />
      <Image
       source={{ uri:'http://sungkomonline.com/file/imageMarket/20131221015637pwn7d2l8q306okjlauqszs8qr2quelojxrqbsbiid8429nnyht-1rwmy4tzt4t.jpg' }}
       style={{ width: 400, height: 400}}
      />
      <Image
       source={{ uri:'http://sungkomonline.com/file/imageMarket/20131221015637pwn7d2l8q306okjlauqszs8qr2quelojxrqbsbiid8429nnyht-1rwmy4tzt4t.jpg' }}
       style={{ width: 400, height: 400}}
      />
      </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;