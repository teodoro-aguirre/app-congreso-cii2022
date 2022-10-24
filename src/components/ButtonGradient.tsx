import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props extends StackScreenProps<any, any>{};

export const ButtonGradient = ( {navigation} : Props) => {
    return (
        <TouchableOpacity style={styles.container} 
            onPress = { () =>  navigation.navigate('MenuScreen')}
        >
            <LinearGradient
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            start = {{x: 1, y: 0}}
            end = {{x: 0, y: 1}}
            style={styles.button}
           >
        <Text style={styles.text}>Iniciar sesión</Text>
      </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 60,
        width: 200
    }, 
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})