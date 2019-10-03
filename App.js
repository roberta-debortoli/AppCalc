import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View>
          
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>Calculadora</Text>
        </View>

        <View style={styles.display}>
          <Text style={styles.text}> 0 </Text>
        </View>

         {/*Inicio linha 01*/}
        <View style={styles.botao}>

          <View style={styles.button}>
            <Button
              onPress={() => {
                alert('Botão Limpar');
              }}
              title="CC"
               color="white"
            />
          </View>

          <View style={styles.button}>
            <Button
              onPress={() => {
                alert('Botão %');
              }}
              title="%"
              color="white"
            />
          </View>

          <View style={styles.button}>
            <Button
              onPress={() => {
                alert('Botão √');
              }}
              title="√"
              color="white"
            />
          </View>

          <View style={styles.button}>
            <Button
              onPress={() => {
                alert('Botão ÷');
              }}
              title="÷"
             color="white"
            />
          </View>

        </View>
      

      {/*Fim linha 01*/}

      {/*Inicio linha 02*/}

      <View style={styles.botao}>

          <View style={styles.nums}>
            <Button
              onPress={() => {
                alert('Botão 7');
              }}
              title="7"
              color="white"
            />
          </View>

          <View style={styles.nums}>
            <Button
              onPress={() => {
                alert('Botão 8');
              }}
              title="8"
               color="white"
            />
          </View>

          <View style={styles.nums}>
            <Button
              onPress={() => {
                alert('Botão 9');
              }}
              title="9"
               color="white"
            />
          </View>

          <View style={styles.button}>
            <Button
              onPress={() => {
                alert('Botão x');
              }}
              title="x"
             color="white"
            />
          </View>

        </View>
        {/*Fim linha 02*/} 

        {/*Inicio linha 03*/}

      <View style={styles.botao}>

          <View style={styles.nums}>
            <Button
              onPress={() => {
                alert('Botão 4');
              }}
              title="4"
               color="white"
            />
          </View>

          <View style={styles.nums}>
            <Button
              onPress={() => {
                alert('Botão 5');
              }}
              title="5"
               color="white"
            />
          </View>

          <View style={styles.nums}>
            <Button
              onPress={() => {
                alert('Botão 6');
              }}
              title="6"
               color="white"
            />
          </View>

          <View style={styles.button}>
            <Button
              onPress={() => {
                alert('Botão -');
              }}
              title="-"
             color="white"
            />
          </View>

        </View>
        {/*Fim linha 03*/} 

        {/*Inicio linha 04*/}

      <View style={styles.botao}>

          <View style={styles.nums}>
            <Button
              onPress={() => {
                alert('Botão 1');
              }}
              title="1"
              color="white"
            />
          </View>

          <View style={styles.nums}>
            <Button
              onPress={() => {
                alert('Botão 2');
              }}
              title="2"
              color="white"
            />
          </View>

          <View style={styles.nums}>
            <Button
              onPress={() => {
                alert('Botão 3');
              }}
              title="3"
              color="white"
            />
          </View>

          <View style={styles.button}>
            <Button
              onPress={() => {
                alert('Botão +');
              }}
              title="+"
             color="white"
            />
          </View>

        </View>
        {/*Fim linha 04*/}

        {/*Inicio linha 05*/}

      <View style={styles.botao}>

          <View style={ [styles.nums, {flex:9} ]}>
            <Button
              onPress={() => {
                alert('Botão 0');
              }}
              title="0"
              color="white"
            />
          </View>

          <View style={ [styles.nums, {flex:3} ]}>
            <Button
              onPress={() => {
                alert('Botão =');
              }}
              title="="
              color="white"
            />
          </View>

        </View>
        {/*Fim linha 05*/} 
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    borderWidth: 3,
  },
  display: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60,
    paddingRight: 15,
    margin: 5,
    borderRadius: 180,
    borderColor: 'black',
    backgroundColor: '#4F4F4F',
  },
  botao:{
    flexDirection: 'row',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    margin: 3,
    borderWidth: 3,
    borderColor: 'white',
    color: 'white',
  },
  button: {
    flex: 1,
    margin: 3,
    backgroundColor: 'darkorange',
    height: 40,
  },
  nums: {
    flex: 1,
    margin: 3,
    backgroundColor: '#4F4F4F',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
  },
});
