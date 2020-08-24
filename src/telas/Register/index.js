import React from 'react';
import { Text,StyleSheet, View,TextInput,TouchableOpacity,Image, Button} from 'react-native';
import {FontAwesome, AntDesign,Entypo} from '@expo/vector-icons';
import Scroll from '../../components/scroll/index';
import { useLinkProps } from '@react-navigation/native';
import logo from '../../images/logo.jpeg'

// import { Container } from './styles';

const Register = ({navigation}) => (
 
  <View style={styles.container}>
   
      {
     // <Button  title="Navegar" onPress={() => navigation.navigate('Register')} />
      }
       <TouchableOpacity  onPress={()=>{navigation.navigate('Login')}}>
        <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft:20, marginBottom:50}} />  
       </TouchableOpacity>
     
       <Text style={{marginLeft: 16, fontWeight:'bold', fontSize:20, marginBottom:0}}>Criar conta</Text>
       <View style={styles.body}>
      
          <View style={styles.form}>
          <View style={{flexDirection: 'column', alignItems:'flex-start'}}>
              <Text style={{marginBottom:7,color:'#707070'}}>Nome completo</Text>
              <TextInput style={styles.input} textContentType="emailAddress" placeholder="exemplo@gmail.com" placeholderTextColor="#8E8E8E"/>
            </View>
            <View style={{flexDirection: 'column', alignItems:'flex-start'}}>
              <Text style={{marginBottom:7, color:'#707070'}}>E-mail</Text>
              <TextInput style={styles.input}   placeholder="exemple@gmail.com" placeholderTextColor="#8E8E8E"/>
            </View>
            <View style={{flexDirection: 'column', alignItems:'flex-start'}}>
              <Text style={{marginBottom:7, color:'#707070'}}>Senha</Text>
              <TextInput style={styles.input}  secureTextEntry={true} placeholder="******" placeholderTextColor="#8E8E8E"/>
            </View>
            
            <View style={{flexDirection:'row', justifyContent:'center'}}>
               <Text style={{width:320, textAlign:'justify'}}>Ao se cadastrar, você concorda com os termos e condições e as políticas de privacidade.</Text>
            </View>
           <View style={{marginTop:30, justifyContent:'center',alignItems:'center'}}>
              <Text>Ou cadastrar com</Text>
              <View style={{flexDirection:'row', marginTop:10, justifyContent:'center'}}>
                <FontAwesome name="google" color="#000" size={40} style={{marginRight:10}}/>
                <Entypo name="facebook-with-circle" color="#000" size={40}/>
              </View>
            </View>
            <View style={{alignItems:'center', marginTop:60}}>
              
              <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Cep')}}>
                <Text style={{color: '#000', fontWeight:'bold', fontSize:16}}>
                  CADASTRAR
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
      backgroundColor: '#F9F9F9',
      
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
      marginTop: 20
    },
    form:{
      marginTop: 30
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
      width:340,
      height: 50,
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 4  ,
      paddingHorizontal: 12
    }

   
  })
 


export default Register;