'use strict'
/**
 * 和风天气api接口
 */

var BaseUrl = 'https://free-api.heweather.com/v5/';

module.exports = {
    //天气
    weather:BaseUrl+'weather',
    //未来3-10天
    forecast:BaseUrl+'forecast',
    //实时天气
    now:BaseUrl+'now',
    //未来每小时
    hourly:BaseUrl+'hourly',
    //查询城市
    search:'https://api.heweather.com/v5/search',

}