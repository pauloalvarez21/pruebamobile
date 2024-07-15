import React from 'react';
import { View, Text } from 'react-native';

const DetalleScreen = (route) => {

    console.log(route);
    const { firstName, id, lastName, picture, title } = route.params;

    return(
        <View>
            <Text>ID: {id}</Text>
            <Text>Titulo: {title}</Text>
            <Text>Nombre: {firstName}</Text>
            <Text>Apellido: {lastName}</Text>
        </View>
    );
}

export default DetalleScreen;