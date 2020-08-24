import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView, Image} from 'react-native';
import {Ionicons,FontAwesome,Entypo,Feather} from '@expo/vector-icons';
import Slide from '../../components/scrollProduct/index';
import img1 from '../../images/arroz.png';
import img2 from '../../images/leite.png';
import img3 from '../../images/suco.png';
import img4 from '../../images/queijo.png';
import { TextInput } from 'react-native-gesture-handler';

// import { Container } from './styles';

const produtos  = [
    {
        "key": 1,
        "name": 'Arroz',
        "img": img1,
        "order": '10,00',
        "point": '100'
    },
    {
        "key": 2,
        "name": 'Leite',
        "img": img2,
        "order": '10,00',
        "point": '100'
    },
    {
        "key": 3,
        "name": 'Suco',
        "img": img3,
        "prder": '10,00',
        "point": '100'
    },
    {
        "Key": 4,
        "name": 'Queijo',
        "img": img4,
        "order": '10,00',
        "point": '100'
    }
]

const Home = ({navigation}) => {
  return(
      <View style={{flex:1, backgroundColor:'#F9F9F9'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',height:60}}>
            <Entypo name="menu" size={30} color="#F28D1F" style={{marginLeft:10}}/>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'#F28D1F', marginRight:50, fontWeight:'bold'}} >FIT NOW</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Carrinho')}} style={styles.botaoCarrinho}>
                    <Feather name="shopping-cart" size={30} color="#FfF" />
                    <Text style={{color:'#fff'}}>0</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.header}>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <View style={{justifyContent:'center', alignItems:'center', width:100, height:100,backgroundColor:'#5e1e89',borderRadius:40}}>
                    <FontAwesome name="shopping-basket" size={44} color="#fff" />
                </View>
                <Text style={{color:'#fff',fontWeight:'bold', marginTop:6}}>FEIRA DA JULIA</Text>
            </View>
            
            
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={styles.inputArea}>
                <TextInput style={styles.input} placeholder="Buscar..."/>
                <FontAwesome style={{marginLeft:-40}} name="search" size={30} color="#8E8E8E" />
            </View>
          </View>
        
          <Text style={{color:'#8E8E8E',fontWeight:'bold', marginLeft:20,marginTop:20}}>Hortifrúit</Text>
          <Slide/>
         
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
export default Home;