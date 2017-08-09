import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image
} from 'react-native';

import CityWeather from './CityWeather.js';

export default class AwesomeWeather extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
    this.getWeatherAsync();
  }

  render () {
    return (
      <View style={{paddingTop:20, height: 250}}>
        { this.state.data == null ? this.loading() : this.binding()}
      </View>
    );
  }


  loading() {
    return (<ActivityIndicator />);
  }

  binding() {
    return (<CityWeather data={this.state.data} />)
  }

  getWeatherAsync() {
    fetch('https://query.yahooapis.com/v1/public/yql?format=json&q=select%20*%20from%20weather.forecast%20where%20woeid=2151849')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState(previousState => {
            return { data: responseJson.query.results.channel };
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
