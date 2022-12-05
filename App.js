import React, { startTransition, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const words = [
                'Infortúnio', 
                'Entender', 
                'Escola', 
                'Bastardo', 
                'Versátil',
                'Nave',
                'Cajado',
                'Manga',
                'Tinta',
                'Elástico',
                'Negação',
                'Bigorna',
                'Lula Ladrão',
                'Colapso',
                'Degeneração',
                'Estudar',
                'Informática',
                'Padrastro',
                'Ideia',
                'Bifurcação',
                'Pau Pequeno',
                'Precheca',
                'Tiara',
                'Traveco',
                'Introdução',
                'Forca',
                'Negação',
                'Cheirinho da Loló',
                'Estrelas',
                'Batismo',
                'Abobado',
                'Perna de Pau',
                'Tijolo',
                'Otaku',
                'Samurai',
                'Pastel de Flango',
                'Ousadia & Alegria', 
                'Degustação',
                'Fio',
                'Rosnar',
                'Anabolizante',
                'Ódio',
                'Casca',
                'Alcoólatra',
                'Sólido',
                'Armador',
                'Lança',
                'Miúdo',
                'Jardim',
                'Efeito Borboleta', //50
                'Urna',
                'Mágica',
                'Matemática',
                'Zeus',
                'Vibrar',
                'Espaço Tempo',
                'Oração',
                'Lobisomem',
                'Frankenstein',
                'Natação', //60
                'Renascer',
                'Brochar',
                'Quartel',
                'Militar',
                'Chavoso', //65
              ];

  const [word, setWord] = useState(null);
  const length= words.length.toString();
  const [time, setTime] = useState(60);
  
  function timeCount(){
    
    setInterval(function(){
      
      setTime(time - 1);

    }, 1000);
  
  }

  function randomWord(){

    timeCount();

    return setWord(words[Math.floor(Math.random() * length)]);
  }

  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 30, marginBottom: 100}}>MimeGame</Text>
      <Text style={{color: 'white'}}>Quando estiver pronto aperte o botão.</Text>
      <Text style={{color: 'white', fontSize: 30}}> { time } </Text>
      <TextInput style={styles.textInputWord} onChangeText={ setWord } value={ word } editable={false} selectTextOnFocus={false} />
      <Button style={{}} onPress={ () => randomWord() } title="Iniciar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInputWord: {
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10, 
    marginTop: 10, 
    fontSize: 20, 
    color: 'white', 
    width: '80%', 
    backgroundColor: '#464646'
  },

  textCount: {
    color: 'white', 
    fontSize: 30,
    marginTop: 20,
  },

});
