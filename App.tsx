import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';


export default function App() {
  const [imageSource, setImageSource] = useState(require('./assets/edmundo e romario.jpg'));


  const changeImage = () => {
    if (imageSource === require('./assets/dinamite_3.png')) {
      setImageSource(require('./assets/edmundo e romario.jpg'));
    } else {
      setImageSource(require('./assets/dinamite_3.png'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >APP FOTOS</Text>
      <Image source={imageSource} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={changeImage}>
        <Text style={styles.buttonText}>Clique 👇</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 66
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 22,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});