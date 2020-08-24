import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView, Image} from 'react-native';
import {Ionicons,FontAwesome} from '@expo/vector-icons';
import Slide from '../../components/scroll/index';
import img1 from '../../images/arroz.png';
import img2 from '../../images/leite.png';
import img3 from '../../images/suco.png';
import img4 from '../../images/queijo.png';

// import { Container } from './styles';


const Inicio = ({navigation}) => {
  return(
      <View style={{flex:1, backgroundColor:'#F9F9F9'}}>
          <View style={styles.header}>
              <View style={{width:80,height:80, borderWidth:2, borderColor:'#fff',justifyContent:'center', alignItems:'center',borderRadius:40}}>
                 <FontAwesome name="user" color="#fff" size={60}/>
              </View>
            
          </View>
          <Text style={{color:'#8E8E8E',margin:20,fontWeight:'bold'}}>Faça sua compra online</Text>
          <View style={{height: 120, backgroundColor: '#F9F9F9', justifyContent: 'center', alignItems:'center', marginTop: 10,   marginTop: 20, marginBottom: 20,paddingBottom:10,paddingTop:18}}>
    <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Menu')}}  style={styles.item}>
          <FontAwesome name="shopping-basket" size={44} color="black" />
        </TouchableOpacity>
        <TouchableOpacity   style={styles.item}>
          <FontAwesome name="shopping-basket" size={44} color="black" />
        </TouchableOpacity>
        <TouchableOpacity   style={styles.item}>
          <FontAwesome name="shopping-basket" size={44} color="black" />
        </TouchableOpacity>
        <TouchableOpacity   style={styles.item}>
          <FontAwesome name="shopping-basket" size={44} color="black" />
        </TouchableOpacity>
      
    </ScrollView>
  </View>
          <Text style={{color:'#8E8E8E',margin:20,fontSize:18}}>HORTIFRUT</Text>
          <View style={{margin:20,height:100,backgroundColor:'#470B7A',borderRadius:18}}>

          </View>
          <View style={{margin:20,height:100,backgroundColor:'#F4A307',borderRadius:18}}>

          </View>
         
      </View>
  )
}
const styles = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: '#F28D20',
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
    
    item: {
     
        marginLeft: 10,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 19,
        borderRadius: 20,
        backgroundColor: '#fff',
        height: 90,
        width: 90,
        
        
              
    },
    texto: {
      
        color: '#5E5C5C',
        fontWeight: 'bold'
    },
    img: {
  
      borderRadius: 30,
      marginTop:16,
      width: 50,
      height: 50,
      
    }
})
export default Inicio;