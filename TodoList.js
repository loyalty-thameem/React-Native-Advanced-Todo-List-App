import * as React from 'react';
import {
  View,
  Text,
  Button,
  Icon,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import colors from '../Colors';
const TodoList=({ list })=>{
  const completedCount = list.todos.filter(todo=>todo.completed).length
  const remainingCount = list.todos.length-completedCount
  // const remainingCount = list.todos.filter(todo=>!todo.completed).length is WORKING FINE 

  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>
    <View style={{alignItems:'center'}}>
    <Text style={styles.count}>{remainingCount}
    </Text>
    <Text style={styles.subtitle}>Remaining
    </Text>
    </View>
    <View style={{alignItems:'center'}}>
    <Text style={styles.count}>{completedCount}
    </Text>
    <Text style={styles.subtitle}>Completed
    </Text>
    </View>
    </View>
  );
} 
export default TodoList
const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
  },
  count:{
    fontSize:48,
    fontWeight:'200',
    color:colors.white,
    
  },
  subtitle:{
    fontSize:12,
    fontWeight:'700',
    color:colors.white,


  }

});
