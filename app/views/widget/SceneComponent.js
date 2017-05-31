'use strict'

import React, { Component ,PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SceneComponent extends Component{
    constructor(...props){
        super(...props);
    }
    getScene(){
        return this.context.scene;
    }
}
SceneComponent.contextTypes = {
    scene:PropTypes.object
}