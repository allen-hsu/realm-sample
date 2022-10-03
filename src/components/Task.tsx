import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task = props => {
  console.log(props.createdAt);
  return (
    <View style={styles.container}>
      <Text>{props.description}</Text>
      <Text>{props.id.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default Task;
