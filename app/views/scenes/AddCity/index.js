'use strict'
import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Scene from './../../widget/Scene';
export default class AddCity extends Scene{
    constructor(...props){
        super(...props)
    }
    render(){
        return <Text>1111</Text>
    }
}
AddCity.navigationOptions = {
    title:'hello'
}