import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Task from './src/components/Task';

export default class App extends Component {

    state = {
        taskArray: [],
        taskContent: '',

    }

    render() {
      
      let tasks = this.state.taskArray.map((val, key) => {
          return <Task key={key} keyval={key} val={val} deleteMethod={ () => this.deleteTask(key) } />
      });
      
    return (
        <View style={styles.container}>
        
            <View style={styles.header}>
                <Text style={[styles.headerText, styles.font]}>Task Whoa</Text>
            </View>
        
            <View style={styles.inputWrap}>
    
                <TextInput style={[styles.textInput, styles.font]}
                    onChangeText={(taskContent) => this.setState({taskContent})} value={this.state.taskContent}
                    placeholder='> Create a task!' placeholderTextColor='white' underlineColorAndroid='transparent'>
                </TextInput>

                <TouchableOpacity onPress={this.addTask.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
        
            </View>
        
            <ScrollView style={styles.scrollContainer}>
                {tasks}
            </ScrollView>
        
        </View>
    );
  }
  
  addTask() {
      //alert(this.state.taskContent);
      if (this.state.taskContent) {
          var d = new Date();
          this.state.taskArray.push( {'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(), 'note': this.state.taskContent} );
          this.setState({ taskArray: this.state.taskArray });
          this.setState({ taskContent: ''});
      }
  }

    deleteTask(key) {
        //alert(key);
        this.state.taskArray.splice(key, 1);
        this.setState({ taskArray: this.state.taskArray });
    }
  
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#32235e'
    },
    font: {
        fontFamily: 'Noteworthy'
    },
    container: {
        flex: 1,
        backgroundColor: '#32235e',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    inputWrap: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        paddingBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.15)'
    },
    addButton: {
        position: 'absolute',
        backgroundColor: 'transparent',
        width: 70,
        height: 70,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
        zIndex: 10
    },
    addButtonText: {
        color: '#fff',
        fontSize: 40
    }
});
