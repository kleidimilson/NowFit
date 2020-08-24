import React from 'react';
import { Text,StyleSheet, View,TextInput,TouchableOpacity,Image, Button} from 'react-native';
import {FontAwesome, AntDesign,MaterialIcons} from '@expo/vector-icons';
import Scroll from '../../components/scroll/index';
import { useLinkProps } from '@react-navigation/native';
import logo from '../../images/logo.jpeg'

// import { Container } from './styles';

const Cep = ({navigation}) => (
 
  <View style={styles.container}>
   
      {
     // <Button  title="Navegar" onPress={() => navigation.navigate('Register')} />
      }
       <TouchableOpacity  onPress={()=>{navigation.navigate('Register')}}>
        <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft:20, marginBottom:50}} />  
       </TouchableOpacity>
     
       <Text style={{marginLeft: 16, fontWeight:'bold', fontSize:20, marginBottom:-10}}>Informe o seu CEP</Text>
       <View style={styles.body}>
      
          <View style={styles.form}>
           
            <View style={{flexDirection: 'column', alignItems:'flex-start'}}>
              <TextInput style={styles.input}   placeholder="00000-000" placeholderTextColor="#8E8E8E"/>
            </View>
           
           
            <TouchableOpacity style={styles.btn2} onPress={()=>{navigation.navigate('Register')}}>
                <Text style={{color: '#000', fontWeight:'bold', fontSize:14}}>
                  MINHA LOCALIZAÇÃO
                </Text>
                <MaterialIcons name="location-on" size={24} color="black" />
              </TouchableOpacity>
            <View style={{alignItems:'center', marginTop:10}}>
              
              <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Endereco')}}>
                <Text style={{color: '#000', fontWeight:'bold', fontSize:16}}>
                  CONTINUAR
                </Text>
                <AntDesign name="arrowright" size={24} color="black" />
              </TouchableOpacity>
            </View>
           
           
          </View>
         
      </View>
 </View>
     
  
    

  
)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:80,
      backgroundColor:'#F9F9F9'
      
    },
    header: {
      height: 150,
      backgroundColor: '#F9F9F9',
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
    body: {
      alignItems: 'center',
      marginTop: 20,
 
    },
    form:{
      marginTop: 30,
      
    },
    input: {
 
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 12,
      width: 370,
      marginBottom:13,
      paddingLeft:10,
      borderWidth:1,
      borderColor:'#EEEEEE'

    },
    btn: {
      backgroundColor: '#F28D20',
      width:370,
      height: 50,
    
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 4  ,
      paddingHorizontal: 12
    },
    btn2: {
        backgroundColor: '#F9F9F9',
        width:370,
        height: 50,
      
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4  ,
        paddingHorizontal: 12
      }

   
  })
 


export default Cep;