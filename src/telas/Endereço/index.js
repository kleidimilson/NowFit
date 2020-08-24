import React from 'react';
import { Text,StyleSheet, View,TextInput,TouchableOpacity,Image, Button} from 'react-native';
import {FontAwesome, AntDesign,Entypo} from '@expo/vector-icons';
import Scroll from '../../components/scroll/index';
import { useLinkProps } from '@react-navigation/native';
import logo from '../../images/logo.jpeg'

// import { Container } from './styles';

const Endereco = ({navigation}) => (
 
  <View style={styles.container}>
   
      {
     // <Button  title="Navegar" onPress={() => navigation.navigate('Register')} />
      }
       <TouchableOpacity  onPress={()=>{navigation.navigate('Login')}}>
        <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft:20, marginBottom:50}} />  
       </TouchableOpacity>
     
       <Text style={{marginLeft: 16, fontWeight:'bold', fontSize:20, marginBottom:0}}>ENDEREÇO DE ENTREGA</Text>
       <View style={styles.body}>
      
          <View style={styles.form}>
          <View style={{flexDirection: 'column', alignItems:'flex-start'}}>
              <Text style={{marginBottom:7,color:'#707070'}}>Rua</Text>
              <TextInput style={styles.input}  placeholder="Rua 03 de outubro" placeholderTextColor="#8E8E8E"/>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection: 'column', alignItems:'flex-start'}}>
                <Text style={{marginBottom:7, color:'#707070'}}>Bairro</Text>
                    <TextInput style={styles.inputBairro}   placeholder="Jardim Helena" placeholderTextColor="#8E8E8E"/>
                </View>
                <View style={{flexDirection: 'column', alignItems:'flex-start'}}>
                <Text style={{marginBottom:7, color:'#707070'}}>N°</Text>
                    <TextInput style={styles.inputNumero}   placeholder="220" placeholderTextColor="#8E8E8E"/>
                </View>
            </View>
            <View style={{flexDirection: 'column', alignItems:'flex-start'}}>
              <Text style={{marginBottom:7, color:'#707070'}}>Detalhes(apto,sala,etc)</Text>
              <TextInput style={styles.input}  placeholder="(Opcional)" placeholderTextColor="#8E8E8E"/>
            </View>
            <Text  style={{ color:'#707070'}}>Nome do endereço</Text>
            <Text  style={{width:300,marginTop:20,marginBottom:10, color:'#707070'}}>Para facilitar futuras compras, você pode escolherum nome para cada endereço</Text>
            <TextInput style={styles.input}  placeholder="Casa, Trabalho, Namorado(a), etc..." placeholderTextColor="#8E8E8E"/>
            <View style={{alignItems:'center', marginTop:60}}>
              
              <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Inicio')}}>
                <Text style={{color: '#000', fontWeight:'bold', fontSize:16}}>
                  SALVAR ENDEREÇO
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
      alignItems: 'center',
    
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
    inputBairro: {
 
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 12,
        width: 200,
        marginBottom:13,
        paddingLeft:10,
        borderWidth:1,
        borderColor:'#EEEEEE'
  
      },
      inputNumero: {
 
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 12,
        width: 109,
        marginBottom:13,
        paddingLeft:10,
        marginLeft:10,
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
 


export default Endereco;