import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export const MenuScreen = () => {
  return (
    <View style = { styles.container }>
        <Text >Selecciona una opción</Text>
        <TouchableOpacity style= { styles.containerBtn }
        >
          <LinearGradient
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            start = {{x: 1, y: 0}}
            end = {{x: 0, y: 1}}
            style={styles.button}
           >
            <Text style={ styles.text }>Entradas</Text>
          </LinearGradient>
          
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    button: {
      width: '80%',
      height: 50,
      borderRadius: 25,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center' 
    }, 
    text: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold'
    },
    containerBtn: {
      alignItems: 'center',
      marginTop: 60,
      width: 200
    }, 
});
