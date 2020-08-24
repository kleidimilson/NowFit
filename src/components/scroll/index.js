import React from 'react';
import { View,ScrollView,Text, TouchableOpacity,Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import img1 from '../../images/01.png'
import img2 from '../../images/02.png'
import img3 from '../../images/03.png'
import img4 from '../../images/04.png'
import img5 from '../../images/05.png'

// import { Container } from './styles';


const Scroll = ({navigation}) => (
  <View style={{height: 120, backgroundColor: '#F9F9F9', justifyContent: 'center', alignItems:'center', marginTop: 10,   marginTop: 20, marginBottom: 20,paddingBottom:10,paddingTop:18}}>
    <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Mercado')}}  style={styles.item}>
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
)

const styles = StyleSheet.create({
  
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
  


export default Scroll;