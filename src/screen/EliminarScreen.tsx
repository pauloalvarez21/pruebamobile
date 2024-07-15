import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const EliminarScreen = ({route, navigation}) => {

    const { firstName, id, lastName, picture, title } = route.params;

    const eliminar = () => {
        fetch('https://dummyapi.io/data/v1/user/' + id, {
            method: 'DEL',
            headers: {
                'app-id': '63473330c1927d386ca6a3a5'
            }
        })
        .then(response => response.json())
        .then(users => {
            console.log(users.data)
        })
    }

    return (
        <View>
        <TouchableOpacity
            onPress={() => eliminar()}
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

export default EliminarScreen;