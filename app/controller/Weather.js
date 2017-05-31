'use strict'
var {getRequest} = require('./Http');

var WeatherServicesURL = require('./../res/WeatherServicesURL');

const KEY = '9a8f32ecb725408d8b80c7cc13e08553';

function sentRequestToHefeng(url,params){
    params.key = KEY;
    return getRequest(url,params).then(function(response){
        if(response.ok){
            return response.text().then(function(content){
                return JSON.parse(content);
            })
        }
    },function(data){
        return data;
    });
}
var hefengAPI = {

}
function createHefengAPI(){
    Object.keys(WeatherServicesURL).forEach(function(name){
        hefengAPI[name] = function(params){
           return sentRequestToHefeng(WeatherServicesURL[name],params);
        } 
    });
}
createHefengAPI();

module.exports = {
    sentRequestToHefeng,
    ...hefengAPI
}