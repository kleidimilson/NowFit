import React from 'react';
import { View,ScrollView,Text, TouchableOpacity,Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import img1 from '../../images/manga.png'
import img2 from '../../images/peira.png'
import img3 from '../../images/maça.png'
import img4 from '../../images/melancia.png'
import img5 from '../../images/05.png'

// import { Container } from './styles';

const itens = [
    
    {
      "key": "1",
      "nome": "Manga",
      "preço": "0,89",
      "img": img1
    },
   {
      "key": "2",
      "nome": "Peira",
      "preço": "0,89",
      "img": img2
    },
    {
      "key": "3",
      "nome": "Maça",
      "preço": "1,50",
      "img": img3
    },
    {
      "key": "4",
      "nome": "Melância",
      "preço": "3,50",
      "img": img4
    },
  
     
   
]


const ScrollProduct = ({navigation}) => (
 <>
  <View style={{height: 210, backgroundColor: '#F9F9F9', justifyContent: 'center', alignItems:'center',   marginTop: 20, marginBottom: 20,paddingBottom:10,paddingTop:18}}>
    <ScrollView style={styles.scroll}  horizontal={true} showsHorizontalScrollIndicator={false}>
    {
           itens.map(item => (
               
                 <TouchableOpacity  key={item.key} style={styles.item}>
                    <View style={styles.imagem}>
                       <Image style={styles.img} source={item.img} />
                    </View>
                    <Text style={styles.texto}>R$ {item.preço} und</Text>
                    <Text style={{color:'#8E8E8E', fontSize:10}}>Hortifrúit</Text>
                    <Text style={{color:'#8E8E8E', fontSize:12,fontWeight:'bold'}}>{item.nome}</Text>
                    <View style={{marginTop:1,borderWidth:2,borderRadius:20,borderColor:'#F28D20', flexDirection:'row', width:94,height:26,justifyContent:'space-between',paddingLeft:5,paddingRight:5}}>
                        <TouchableOpacity><Text style={{color:'#F28D20', fontSize:17}}>-</Text></TouchableOpacity>
                        <Text style={{color:'#F28D20', fontSize:17}}>0</Text>
                        <TouchableOpacity><Text style={{color:'#F28D20', fontSize:17}}>+</Text></TouchableOpacity>
                    </View>
                 </TouchableOpacity>
          
           ))
        }
      
    </ScrollView>

    
  </View>
   <View style={{height: 210, backgroundColor: '#F9F9F9', justifyContent: 'center', alignItems:'center',   marginTop: -20, marginBottom: 20,paddingBottom:10,paddingTop:18}}>
   <ScrollView style={styles.scroll}  horizontal={true} showsHorizontalScrollIndicator={false}>
   {
          itens.map(item => (
              
                <TouchableOpacity  key={item.key} style={styles.item}>
                   <View style={styles.imagem}>
                      <Image style={styles.img} source={item.img} />
                   </View>
                   <Text style={styles.texto}>R$ {item.preço} und</Text>
                   <Text style={{color:'#8E8E8E', fontSize:10}}>Hortifrúit</Text>
                   <Text style={{color:'#8E8E8E', fontSize:12,fontWeight:'bold'}}>{item.nome}</Text>
                   <View style={{marginTop:1,borderWidth:2,borderRadius:20,borderColor:'#F28D20', flexDirection:'row', width:94,height:26,justifyContent:'space-between',paddingLeft:5,paddingRight:5}}>
                       <TouchableOpacity><Text style={{color:'#F28D20', fontSize:17}}>-</Text></TouchableOpacity>
                       <Text style={{color:'#F28D20', fontSize:17}}>0</Text>
                       <TouchableOpacity><Text style={{color:'#F28D20', fontSize:17}}>+</Text></TouchableOpacity>
                   </View>
                </TouchableOpacity>
         
          ))
       }
     
   </ScrollView>

   
 </View>
 </>
)

const styles = StyleSheet.create({
  scroll: {
      backgroundColor:'#fff',
      padding:20,
      
    
    borderRadius:10
  },
    item: {
     
        marginLeft: 10,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 19,
        borderRadius: 20,
       
        height: 100,
        width: 100,
        shadowColor: "#000",
      
        
        
              
    },
    texto: {
      
        color: '#5E5C5C',
        fontWeight: 'bold',
        fontSize:10
    },
    img: {
  
      
      marginTop:50,
      marginBottom:20,
      width:45,
      height: 45,
      
    },
    imagem: {
      justifyContent:'center',
      alignItems:'center'
    }
})
  


export default ScrollProduct;