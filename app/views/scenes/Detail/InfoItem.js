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

import { Theme, autoSize } from 'react-native-improver';
var currentTheme = Theme.getTheme();

class TimeColumn extends SceneComponent {
    constructor(...props) {
        super(...props);
    }
    render() {
        return <View style={styles.timeColumn}>
            <Text style={[styles.timeText]}>{this.props.value}</Text>
        </View>
    }
}

class TemperatureColumn extends SceneComponent {
    constructor(...props) {
        super(...props);
    }
    render() {
        return <View style={styles.temperatureColumn}>
            <Text style={styles.temperatureText}>{this.props.value}°</Text>
        </View>
    }
}
export default class InfoItem extends SceneComponent {
    constructor(...props) {
        super(...props);

    }
    render() {
        var dataSource = this.props;
        return <View style={[styles.row, this.props.style]}>
            <TimeColumn
                value={dataSource.date} />
            <TemperatureColumn
                value={dataSource.temperature} />
        </View>
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
        color: '#333333'
    },
    temperatureColumn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    temperatureText: {
        fontSize: autoSize(24),
        color: '#333333'
    }
})