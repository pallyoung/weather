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
import Weather,{weather,now} from './../../../controller/Weather';

import Info from './Info';
import CurrentInfo from './CurrentInfo';
export default class Detail extends Scene{
    constructor(...props){
        super(...props);
        this.state = {
            currentInfo:{
                
            }
        }
    }
    componentDidMount() {
        now({'city':'龙游'}).then((data)=>{
            var weather = data.HeWeather5[0];
            var city = weather.basic.city;
            var type = weather.now.cond.txt;
            var temperature = weather.now.tmp;
            this.state.currentInfo = {
               city,
               type,
               temperature 
            }
            this.refs.currentInfo.updateInfo(this.state.currentInfo);
        })
    }
    
    render(){
        return <View style = {styles.wrapper}>
            <Image 
                style = {[styles.background,{height:this.height,width:this.width}]}
                source = {require('./bg_detail.png')}
                resizeMode = 'stretch'/>
            <CurrentInfo 
                ref = 'currentInfo'
                initalData = {this.state.currentInfo}/>
            <Info 
                onSelectdChange = {()=>{}}/>
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