'use strict'
import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import SceneComponent from './../../widget/SceneComponent';

import { Theme, autoSize } from 'react-native-improver';
var currentTheme = Theme.getTheme();

class TimeColumn extends SceneComponent {
    constructor(...props) {
        super(...props);
    }
    render() {
        return <View style={styles.timeColumn}>
            <Text style={[styles.timeText,this.props.style]}>{this.props.value}</Text>
        </View>
    }
}

class TemperatureColumn extends SceneComponent {
    constructor(...props) {
        super(...props);
    }
    render() {
        return <View style={styles.temperatureColumn}>
            <Text style={[styles.temperatureText,this.props.style]}>{this.props.value}°</Text>
        </View>
    }
}
export default class InfoItem extends SceneComponent {
    constructor(...props) {
        super(...props);

    }
    render() {
        var dataSource = this.props;
        return <TouchableOpacity
            onPress={this.props.onPress}
            underlayColor='#9ed8ee'
            activeOpacity={1}
            style={[styles.row, this.props.style]}
        >
            <TimeColumn
                style = {this.props.isSelected?{color:'#333333'}:null}
                value={dataSource.date} />
            <TemperatureColumn
                style = {this.props.isSelected?{color:'#333333'}:null}
                value={dataSource.temperature} />
        </TouchableOpacity>
    }
}
InfoItem.defaultProps = {
    date: '',
    temperature: '',
    type: ''
}
const styles = StyleSheet.create({
    row: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: currentTheme.borderWidth,
        borderBottomColor: '#F3F3F3',
        height: autoSize(58),
        paddingHorizontal: autoSize(30)

    },
    timeColumn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeText: {
        fontSize: autoSize(18),
        color: '#BCC7FF'
    },
    temperatureColumn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    temperatureText: {
        fontSize: autoSize(24),
        color: '#BCC7FF'
    }
})