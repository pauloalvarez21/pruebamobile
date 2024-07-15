import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from '../screen/InicioScreen';
import RegistroScreen from '../screen/RegistroScreen';
import DetalleScreen from '../screen/DetalleScreen';
import EliminarScreen from '../screen/EliminarScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='inicio' component={InicioScreen}/>
            <Stack.Screen name='registro' component={RegistroScreen}/>
            <Stack.Screen name='detalle' component={DetalleScreen}/>
            <Stack.Screen name='eliminar' component={EliminarScreen}/>
        </Stack.Navigator>
    );
}

export default StackNavigation;