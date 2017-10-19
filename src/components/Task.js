import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Task extends Component {
  render() {
    return (
        <View key={this.props.keyval} style={styles.task}>
            <Text style={[styles.taskContent, styles.font, styles.light]}>{this.props.val.date}</Text>
            <Text style={[styles.taskContent, styles.font]}>{this.props.val.note}</Text>
        
            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.taskDelete}>
                <Text style={[styles.taskDeleteText, styles.font]}>Done</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    font:{
        fontFamily: 'Noteworthy'
    },
    light: {
        color: '#737373'
    },
    task: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    taskContent: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',
        color: '#4d4d4d'
    },
    taskDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#36c6f8',
        borderRadius: 4,
        overflow: 'hidden',
        padding: 10,
        height: 40,
        top: 22,
        bottom: 10,
        right: 10
    },
    taskDeleteText: {
        color: '#36c6f8'
    }
});
