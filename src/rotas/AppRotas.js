import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../telas/Home';
import MelhoresProdutores from '../telas/MelhoresProdutores';
import ProdutorRotas from './produtorRotas';
import MelhoresProdutoresRotas from './melhoreprodutorerotas';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return <NavigationContainer>
      
      <Tab.Navigator>
        <Tab.Screen name='Home' component={ProdutorRotas} />
        <Tab.Screen name='Melhores Produtores' component={MelhoresProdutoresRotas} />
      </Tab.Navigator>
    </NavigationContainer>
}