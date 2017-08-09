import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export const weather_thumbnails = {
  'clear'                     : 'https://ssl.gstatic.com/onebox/weather/256/sunny.png',
  'cloudy_s_sunny'            : 'https://ssl.gstatic.com/onebox/weather/256/cloudy_s_sunny.png',
  // 'cloudy-scattered-showers'  : require('./images/cloudy-scattered-showers.png'),
  'cloudy'                    : 'https://ssl.gstatic.com/onebox/weather/256/cloudy.png',
  'fog'                       : 'https://ssl.gstatic.com/onebox/weather/256/fog.png',
  'partly-cloudy'             : 'https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png',
  'mostly-cloudy'             : 'https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png',
  'rain'                      : 'https://ssl.gstatic.com/onebox/weather/256/rain.png',
  'scattered-showers'         : 'https://ssl.gstatic.com/onebox/weather/256/rain_s_cloudy.png',
  'scattered-thunderstorms'   : 'https://ssl.gstatic.com/onebox/weather/256/rain_s_cloudy.png',
  'sleet'                     : 'https://ssl.gstatic.com/onebox/weather/256/sleet.png',
  'snow'                      : 'https://ssl.gstatic.com/onebox/weather/256/snow.png',
  'thunderstorms'             : 'https://ssl.gstatic.com/onebox/weather/256/thunderstorms.png',
  'wind'                      : 'https://ssl.gstatic.com/onebox/weather/256/wind.png',
}

export default class WeatherImageView extends Component {
  render () {
    let icon = weather_thumbnails[this.props.condition.text.toLowerCase().replace(' ', '-')];
    // var icon = require(iconLocation);
    let width = Number.parseInt(this.props.width, 10);
    let height = Number.parseInt(this.props.height, 10);
    return (
      <Image source={{uri: icon}} style={{width: width, height: height}} />
    );
  }
}
