'use strict'
function postRequest(url,params){
    var headers = new Headers({
        'content-type':'application/json;charset=utf-8'
    });
    var request = new Request(url,{
        method:'post',
        headers,
        body:params
    })
    return sendRequest(request);
}

function getRequest(url,params){
    
    var body = [];
    for(let o in params){
        body.push(o+'='+params[o]);
    }
    if(body.length){
        url+='?'+body.join('&')
    }
    var request = new Request(url,{
        method:'get',
    })
    return sendRequest(request);
}
function sendRequest(request){
    request.credentials =  'include';
    return fetch(request)
}
module.exports = {
    postRequest,
    getRequest
}