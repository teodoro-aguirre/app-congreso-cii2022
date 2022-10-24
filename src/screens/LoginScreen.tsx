import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { ButtonGradient } from '../components/ButtonGradient';

interface Props extends StackScreenProps<any, any>{};

export const LoginScreen = ( { navigation } : Props) => {

  const goMenuBtn = () => {
    navigation.navigate('MenuScreen')
  }

  return (
    <View style={styles.container}>
      <Image
        style = { styles.imgStyle }
        source = { require('../imgs/logo-oficial_mn.png')}
      />
      <Text style = { styles.title }>Bienvenid@</Text>
      <Text style = { styles.subtitle }>Control de acceso al congreso 2022</Text>
      <TextInput 
        style = { styles.textInput }
        placeholder='Usuario'
      />
      <TextInput 
        style = { styles.textInput }
        placeholder='Contraseña'
      />

      <ButtonGradient 
              navigation={navigation}
         /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    color: '#34434D',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    color: 'grey'
  }, 
  textInput: {
    padding: 12,
    paddingStart: 25,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  imgStyle: {
    width: 180,
    height: 180,
    marginVertical: 15,
  }
});
