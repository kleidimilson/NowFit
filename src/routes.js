
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Login from './telas/Login/index'
import Register from './telas/Register/index'
import RecuperaSenha from './telas/Recuperar/index'
import Menu from './telas/Home/Menu'
import Cep from './telas/cep/index'
import Endereco from './telas/Endereço/index'
import Inicio from './telas/inicio/index'
import Mercado from './telas/mercado/index'
import Carrinho from './telas/carrinho/index'
import {AntDesign, Ionicons,MaterialIcons} from '@expo/vector-icons';
import Agenda from './telas/Agendar';
import Finalizar from './telas/finalizar/index'

const Stack = createStackNavigator();


export default function Routes(){

  return (
      <NavigationContainer>
        <Stack.Navigator  headerMode="none"  initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Recupera" component={RecuperaSenha} />
            <Stack.Screen name="Menu" component={Menu}/>
            <Stack.Screen name="Cep" component={Cep}/>
            <Stack.Screen name="Endereco" component={Endereco}/>
            <Stack.Screen name="Inicio" component={Inicio}/>
            <Stack.Screen name="Mercado" component={Mercado}/>
            <Stack.Screen name="Carrinho" component={Carrinho}/>
            <Stack.Screen name="Agenda" component={Agenda}/>
            <Stack.Screen name="Finalizar" component={Finalizar}/>
        </Stack.Navigator>
     </NavigationContainer>
  );

  
}