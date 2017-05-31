'use strict'
import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import config from './config';

import { Theme } from 'react-native-improver';
import { StackNavigator } from 'react-navigation';
import AddCity from './views/scenes/AddCity';
import Detail from './views/scenes/Detail';
import CityManage from './views/scenes/CityManage';
var currentTheme = Theme.getTheme();

var EntryNavigator;
export default class Entry extends Component {
    constructor(...props) {
        super(...props);
        global.Client = this;
        this.state = {
            inited: false
        }
        this.height = 0;
        this.width = 0;
    }
    init() {
        EntryNavigator = StackNavigator({
            AddCity: {
                screen: AddCity,
            },
            Detail: {
                screen: Detail,            },
            CityManage: {
                screen: CityManage,
            },
        },
        {
            initialRouteName:'Detail',
            initialRouteParams:{
                title:'detail',
            }
        });
        this.setState({ inited: true })
    }
    renderScene(route, router) {
        var Scene = route.scene;
        return <Scene {...route.passProps || {}} router={router} />
    }
    componentDidMount() {
        this.init();
    }

    render() {
        return <View
            onLayout={(e) => {
                this.height = e.nativeEvent.layout.height;
                this.width = e.nativeEvent.layout.width;
            }}
            style={styles.wrapper}>

            {this.state.inited && <EntryNavigator />}
        </View>
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: currentTheme.backgroundColor
    }
})