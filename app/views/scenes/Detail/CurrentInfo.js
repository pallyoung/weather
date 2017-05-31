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

    }
    render() {
        return <View style = {styles.wrapper}>
                <Text style = {styles.type}>晴天</Text>
                <Text style = {styles.address}>乌镇</Text>
                <Text style = {styles.temperature}>-9°</Text>
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
        fontSize:autoSize(50),
    }
})