import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import AutoHeightImage from 'react-native-auto-height-image';


const InicioScreen = ({navigation}) => {
    
    var [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://dummyapi.io/data/v1/user?limit=10', {
            method: 'GET',
            headers: {
                'app-id': '63473330c1927d386ca6a3a5'
            }
        })
        .then(response => response.json())
        .then(users => {
            console.log(users.data)
            setData(users.data)
        })
    }, []);

    return(
        <View style={styles.container}>
            <Text>Lista de Usuarios</Text>
            <FlatList
                data={data}
                keyExtractor={(id, index) => index.toString()}
                renderItem={({item}) => (
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('detalle', item)}
                        >
                        <AutoHeightImage 
                            width={200}
                            source={{ uri: item.picture}}
                        />
                        <Text>{item.firstName}</Text>
                        <Text>ID: {item.id}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default InicioScreen;