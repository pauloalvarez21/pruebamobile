import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const DetalleScreen = ({route, navigation}) => {

    console.log(route);
   const { firstName, id, lastName, picture, title } = route.params;

    return(
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('eliminar', route.params)}
            >
            <AutoHeightImage 
                width={200}
                source={{ uri: picture}}
            />
            <Text>ID: {id}</Text>
            <Text>Nombre: {firstName}</Text>
            <Text>Apellido: {lastName}</Text>
            <Text>Titulo: {title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DetalleScreen;