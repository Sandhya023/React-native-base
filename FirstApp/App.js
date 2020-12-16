/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  
} from 'react-native';
import { useState } from 'react';



export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoal] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);

  }
  const addGoalHandler = () => {
    setCourseGoal(currentGoals => [...currentGoals, enteredGoal ]);
  };

  return (
    <View style=
    {styles.screen}>
      <View style={styles.root}>
        <TextInput 
        placeholder="Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>

      </View>
      <View>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 40

  },
  root: {
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  }

});


