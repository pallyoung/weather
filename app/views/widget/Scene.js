'use strict'
import React, { Component ,PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Theme,autoSize} from 'react-native-improver';
var currentTheme = Theme.getTheme();
export default class Scene extends Component{
    constructor(...props){
        super(...props);
    }
    getChildContext(){
        return {scene:this};
    }
    render(){
        return <View>{this.props.children}</View>
    }
}
Scene.childContextTypes = {
  scene: PropTypes.object
};
Scene.navigationOptions = {
    headerStyle:{
        backgroundColor:currentTheme.themeColor,
    },
    headerTitleStyle:{
        color:'white',
        fontSize:autoSize(18),
        fontWeight:'400'
    }
}