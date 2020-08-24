import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView, Image} from 'react-native';
import {Ionicons,Fontisto,Entypo,Feather,AntDesign} from '@expo/vector-icons';
import Slide from '../../components/scrollProduct/index';
import img1 from '../../images/manga.png';
import img2 from '../../images/peira.png';
import img3 from '../../images/suco.png';
import img4 from '../../images/queijo.png';
import { TextInput } from 'react-native-gesture-handler';

// import { Container } from './styles';


const Carrinho = ({navigation}) => {
  return(
      <View style={{flex:1, backgroundColor:'#F9F9F9'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',height:60,backgroundColor:'#F28D1F'}}>
            <Entypo name="menu" size={30} color="#fff" style={{marginLeft:10}}/>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Agenda')}} style={{backgroundColor:'#fff',padding:10,borderRadius:10,flexDirection:'row', height:40,width:200, justifyContent:'center', alignItems:'center'}} >
                    <Fontisto name="date" size={30} color='#F28D20' />
                     <Text style={{color:'#F28D20', marginRight:0, fontWeight:'bold', marginLeft:10}} >AGENDAR PEDIDO</Text>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={()=>{navigation.navigate('Carrinho')}} style={styles.botaoCarrinho}>
                    <Feather name="shopping-cart" size={30} color="#FfF" />
                   
                </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
              <View style={{backgroundColor:'#fff', height:100, marginTop:15, flexDirection:'row', padding:20}}>
                  <Image style={{width:64, height:50, marginTop:15}} source={img1}/>
                  <View style={{flexDirection:'column'}}>
                      <View style={{flexDirection:'row' ,justifyContent:'space-between', width:300}}>
                            <Text style={{color: '#8E8E8E', fontWeight:'bold'}}>Maça</Text>
                            <Text style={{color:'#F28D20', fontWeight:'bold'}}>R$ 0,89</Text>
                      </View>
                      <View style={{justifyContent:'flex-end', width:300, flexDirection:'row'}}>
                          
                        <View style={{marginTop:15,borderRadius:20,backgroundColor:'#F28D20', flexDirection:'row', width:94,height:26,justifyContent:'space-between',paddingLeft:5,paddingRight:5}}>
                            <TouchableOpacity><Text style={{color:'#fff', fontSize:17}}>-</Text></TouchableOpacity>
                            <Text style={{color:'#fff', fontSize:17}}>3</Text>
                            <TouchableOpacity><Text style={{color:'#fff', fontSize:17}}>+</Text></TouchableOpacity>
                        </View>
                      </View>
                  </View>
              </View>
              <View style={{backgroundColor:'#fff', height:100, marginTop:15, flexDirection:'row', padding:20}}>
                  <Image style={{width:64, height:50, marginTop:15}} source={img2}/>
                  <View style={{flexDirection:'column'}}>
                      <View style={{flexDirection:'row' ,justifyContent:'space-between', width:300}}>
                            <Text style={{color: '#8E8E8E', fontWeight:'bold'}}>Pera</Text>
                            <Text style={{color:'#F28D20', fontWeight:'bold'}}>R$ 0,89</Text>
                      </View>
                      <View style={{justifyContent:'flex-end', width:300, flexDirection:'row'}}>
                          
                        <View style={{marginTop:15,borderRadius:20,backgroundColor:'#F28D20', flexDirection:'row', width:94,height:26,justifyContent:'space-between',paddingLeft:5,paddingRight:5}}>
                            <TouchableOpacity><Text style={{color:'#fff', fontSize:17}}>-</Text></TouchableOpacity>
                            <Text style={{color:'#fff', fontSize:17}}>3</Text>
                            <TouchableOpacity><Text style={{color:'#fff', fontSize:17}}>+</Text></TouchableOpacity>
                        </View>
                      </View>
                  </View>
              </View>
             
           <Text style={{color:'#8E8E8E', margin:10}}>Obsercações</Text>
           <TextInput placeholder="Deixar na portaria..." style={{paddingLeft:10,margin:20,borderRadius:18,width:300, height:100, borderWidth:2,borderColor:'#EEEEEE'}}/>
          <View style={{flexDirection:'row', justifyContent:'space-between', margin:16}}>
                <Text style={{fontSize:17, fontWeight:'bold'}}>Próxima entrega</Text>
                <Text>Hoje - 9h as 17h</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', margin:16}}>
                <Text  style={{fontSize:17, fontWeight:'bold'}}>Total</Text>
                <Text style={{color:'#F28D20', fontWeight:'bold'}} >R$ 15,44</Text>
          </View>
           <View style={{justifyContent:'center',alignItems:'center'}}>
           <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Finalizar')}}  >
                <Text style={{color: '#000', fontWeight:'bold', fontSize:16}}>
                  CONTINUAR
                </Text>
                <AntDesign name="arrowright" size={24} color="black" />
              </TouchableOpacity>
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
export default Carrinho;