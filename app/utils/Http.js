'use strict'


function http(method='get',url='',settings={}){
    var request = new Request(url,{
        method,
        ...settings
    });
    return fetch(request);
}

function post(url,params,settings){
    
}
function get(url,params,settings){

    http('get',)
}
