import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView, Image} from 'react-native';
import {Ionicons,Fontisto,Entypo,Feather,AntDesign} from '@expo/vector-icons';
import Slide from '../../components/scrollProduct/index';
import img1 from '../../images/manga.png';
import img2 from '../../images/peira.png';
import img3 from '../../images/suco.png';

import { TextInput } from 'react-native-gesture-handler';

// import { Container } from './styles';


const Finalizar = ({navigation}) => {
  return(
      <View style={{flex:1, backgroundColor:'#F28D1F'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',height:60,backgroundColor:'#F28D1F'}}>
            <TouchableOpacity  onPress={()=>{navigation.navigate('Carrinho')}}>
               <AntDesign name="arrowleft" size={30} color="#fff" style={{marginLeft:10}}/>
            </TouchableOpacity>
            <Text style={{color:'#fff', fontWeight:'bold', marginRight:150}}> FINALIZAR PEDIDO</Text>
          
          </View>
          <ScrollView>
              <View style={{backgroundColor:'#fff',borderRadius:18, height:200, width:380, margin:20, padding:20}}>
                 <View style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'#af54ad',height:80,padding:10, margin:10,borderRadius:30}}>
                       <Entypo name="shopping-bag" size={60} color="#fff" />
                    </View>
                    <View>
                         <Text style={{fontWeight:'bold', marginTop:20}}>FEIRA DA JULIANA</Text>
                    </View>
                    
                 </View>
               
             
             
               
                <Text>16 ENTREGAS REALIZADAS.</Text>
             

              </View>
           
              <View style={{backgroundColor:'#fff',borderRadius:18, height:70, width:380, margin:20,marginTop:5, padding:20, justifyContent:'center'}}>
                <Text style={{marginLeft:10}}>Endereço de Entrega  </Text>
                <Text style={{marginLeft:10, color:'#4b5d68', fontWeight:'bold'}}>RUA 3 DE OUTUBRO, JARDIM HELENA, 02 </Text>
                <Text style={{marginLeft:10,color:'#4b5d68', fontWeight:'bold'}}>SÃO PAULO SP</Text>
              </View>
              
             
           
          </ScrollView>
         
         
      </View>
  )
}
const styles = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: '#F28D1F',
        justifyContent:'center',
        
        alignItems:'center'
        
        
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
      },
    headerBody:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:40,
        marginLeft: 20,
        marginRight: 20
    },
    pontos: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:90,
        marginTop: 10,
        marginLeft:20
    },
    botao: {
        borderWidth: 2,
        borderColor: '#fff',
        width: 100,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        marginLeft: 18,
        borderRadius: 18
    },
    card: {
        width: 380,
        borderRadius: 15,
        height: 90,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 0,
        padding: 10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
        
    },
    imagens: {
        width: 60,
        height: 60
    },
    cardHeader: {
        flexDirection:'row'
    },
    botaoCarrinho: {
        flexDirection:'row',
        backgroundColor:'#F28D1F',
        width:90,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:20,
        height:40,
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:20
        
    },
    input :{
        width:320,
        padding:10,
        height:50,
        backgroundColor:'#fff',
        borderRadius:20
       
        
    },
    inputArea: {
        width:310,
        borderRadius:20,
        justifyContent:'center',
         alignItems:'center', 
         marginTop:10,
         flexDirection:'row',
         shadowColor: "#e5e5e5",
         shadowOffset: {
             width: 0,
             height: 2,
         },
         shadowOpacity: 0.1,
       
         elevation:6,
         
         
    }
})
export default Finalizar;