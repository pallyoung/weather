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
import InfoItem from './InfoItem';
export default class Info extends SceneComponent{
    constructor(...props){
        super(...props);
        this.state = {
            selectedIndex:0
        }
    }
    render(){
        return <View
                style = {styles.wrapper}>
                <Image 
                    style = {[styles.background]}
                    resizeMode = 'stretch'
                    source = {require('./bg_info.png')}/>
                <InfoItem 
                    date = 'Thursday'
                    temperature = '9'
                    type = '1'
                    isSelected = {this.state.selectedIndex == 0}
                    onPress = {()=>this.setState({selectedIndex:0})}
                    style = {{backgroundColor:'transparent'}}/>
                <InfoItem 
                    date = 'Thursday'
                    temperature = '9'
                    type = '1'
                    onPress = {()=>this.setState({selectedIndex:1})}
                    isSelected = {this.state.selectedIndex == 1}
                    />
                <InfoItem 
                    date = 'Thursday'
                    temperature = '9'
                    onPress = {()=>this.setState({selectedIndex:2})}
                    isSelected = {this.state.selectedIndex == 2}
                    type = '1'/>        
        </View>
    }
}
const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'column',
        position:'absolute',
        left:0,
        right:0,
        //top:autoSize(457),
        bottom:0,
        paddingTop:autoSize(26),
    },
    background:{
        height:autoSize(84),
        position:'absolute',
        width:autoSize(375),
        top:0,
        left:0,
        right:0
    }
})