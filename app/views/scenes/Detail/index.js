'use strict'
import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Scene from './../../widget/Scene';
import Weather,{weather} from './../../../controller/Weather';

import Info from './Info';
export default class Detail extends Scene{
    constructor(...props){
        super(...props)
    }
    componentDidMount() {
        weather({'city':'龙游'}).then(function(data){
            console.log(data);
        })
    }
    
    render(){
        return <View style = {styles.wrapper}>
            <Image 
                style = {[styles.background,{height:this.height,width:this.width}]}
                source = {require('./bg_detail.png')}
                resizeMode = 'stretch'/>
            <Info />
        </View>
    }
}
Detail.navigationOptions = {
    header:null
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection:'column',
    },
    background:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0

    }
});