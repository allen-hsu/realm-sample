import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task = (props: {createdAt: string; description: string; id: string}) => {
  const date = new Date(props.createdAt);
  return (
    <View style={styles.container}>
      <Text>{props.description}</Text>
      <Text>{date.toLocaleTimeString()}</Text>
      <Text>{props.id}</Text>
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
