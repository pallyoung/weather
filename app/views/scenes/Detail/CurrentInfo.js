'use strict'
import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import SceneComponent from './../../widget/SceneComponent';
import {autoSize} from 'react-native-improver';

export default class CurrentInfo extends SceneComponent {
    constructor(...props) {
        super(...props);
        var initalData = this.props.initalData||{};
        this.state ={
            ...initalData
        }

    }
    updateInfo(info){
        this.setState(info);
    }
    render() {
        return <View style = {styles.wrapper}>
                <Text style = {styles.type}>{this.state.type}</Text>
                <Text style = {styles.address}>{this.state.city}</Text>
                <Text style = {styles.temperature}>{this.state.temperature}°</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'column',
        position:'absolute',
        left:0,
        right:0,
        top:autoSize(47.5),
        backgroundColor:'transparent',
        alignItems:'center'
        //top:autoSize(457),
    },
    type:{
        color:'#fff',
        fontSize:autoSize(36),
        fontWeight:'600',
        marginBottom:autoSize(14)
    },
    address:{
        color:'#fff',
        fontSize:autoSize(24),
        marginBottom:autoSize(14)
    },
    temperature:{
        color:'#fff',
        fontSize:autoSize(50)
    }
})