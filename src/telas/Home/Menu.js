import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Botao from '../../components/btn/btn';
import Company from '../Company/Company';
import Qrcode from '../Qrcode/Qrcode';
import About from '../About/About';
import Home from '../Home/Home';
import Donate from '../Donate/Donate';
import {AntDesign, Fontisto,MaterialIcons,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';

export default function Routes(){
    const Tab = createBottomTabNavigator();
    const icons = {
        Home: {
            lib: AntDesign,
            name: 'home'
        },
        Company: {
            lib: FontAwesome,
            name: 'industry'
        },
        Qrcode: {
            lib: MaterialIcons,
            name: 'attach-money'
        },
        Donate: {
            lib: Fontisto,
            name: 'date'
        },
        About: {
            lib: MaterialCommunityIcons,
            name: 'sale'
        },
       
    }

    return (
       
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    if(route.name === 'Qrcode'){
                        return <Botao/>
                    }
                   const {lib: Icon, name} = icons[route.name];  
                   return <Icon name={name} size={size} color={color}/>
                },
                
            })}
             tabBarOptions={{
                 style: {
                     backgroundColor: '#fff',
                     borderTopColor: 'rgba(255, 255, 255, 0.2)'
                 },
                 activeTintColor: '#F28D20',
                 inactiveTintColor: '#92929c',
                 fontSize: 10
             }}
            
            >
                <Tab.Screen name="Home"  component={Home} options={{title: 'Inicio'}}/>
                <Tab.Screen name="Company"  component={Company} options={{title: 'Setores'}}/>
                
                <Tab.Screen name="Donate" component={Donate} options={{title: 'Agenda'}}/>
                <Tab.Screen name="About" component={About} options={{title: 'Ofertas'}}/>
               
            </Tab.Navigator>
       
    )
}