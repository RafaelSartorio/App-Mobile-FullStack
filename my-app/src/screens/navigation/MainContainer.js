//Blibiotecas
import * as React from 'react';
import { Text } from 'native-base';

//Screens (Importando os arquivos das telas para poder utilizá-las em chamadas)
import HomeView from './src/screens/HomeView.js';


//Screen Names (Armazenando em uma variável)
const HomeName = "Home";

export default function MainContainer(){
    return(
        
        <HomeView></HomeView>
        
    );
}