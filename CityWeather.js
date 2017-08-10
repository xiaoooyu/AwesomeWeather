import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ListView,
  FlatList,
} from 'react-native';

import WeatherImageView from './WeatherImageView.js';

export default class CityWeather extends View {
  constructor() {
    super();
  }

  render () {
    return (
    <View style={{padding:12}}>
      <CityName location={this.props.data.location} />
      <Text style={{lineHeight:30}}>{this.props.data.item.condition.text}</Text>
      <View style={{flexDirection:'row'}}>
        <WeatherIndicator condition={this.props.data.item.condition} units={this.props.data.units} />
        <WeatherOthers
          wind={this.props.data.wind}
          atmosphere={this.props.data.atmosphere}
          astronomy={this.props.data.astronomy}
          units={this.props.data.units} />
      </View>
      <WeatherForecast forecast={this.props.data.item.forecast} units={this.props.data.units} />
    </View>);
  }
}

export class CityName extends Component {
  render () {
    return (
      <Text style={styles.cityName}>{this.props.location.city}, {this.props.location.country}</Text>
    );
  }
}

export class WeatherIndicator extends Component {
  render () {
    return (
      <View style={{flex:1}}>

        <View style={{flex:1, flexDirection:'row'}}>
          <WeatherImageView condition={this.props.condition} width="80" height="80" />
          <Text style={{fontSize:26}}>{this.props.condition.temp}°{this.props.units.temperature}</Text>
        </View>
      </View>
    );
  }
}

export class WeatherOthers extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text><Text style={styles.label}>Humidity:</Text> {this.props.atmosphere.humidity} % </Text>
        <Text><Text style={styles.label}>Wind:</Text> {this.props.wind.chill} {this.props.units.speed} {this.props.wind.direction} </Text>
        <Text><Text style={styles.label}>Sunrise:</Text> {this.props.astronomy.sunrise} </Text>
        <Text><Text style={styles.label}>Sunset:</Text> {this.props.astronomy.sunset} </Text>
      </View>
    );
  }
}

class WeatherForecast extends Component {
  render() {
    let temperature = this.props.units.temperature;
    return (
      <FlatList
        style={{marginTop:20}}
        horizontal={true}
        data={this.props.forecast}
        keyExtractor={(item, index) => index}
        renderItem={({item}) =>
          <View style={{width:60}}>
            <Text style={{textAlign:'center'}}>{item.day}</Text>
            <WeatherImageView condition={item} width="50" height="50"/>
            <Text style={{textAlign:'center'}}>{item.high}° <Text style={styles.label}>{item.low}°</Text></Text>
          </View>
        }/>
    );
  }
}

const styles = StyleSheet.create({
  city: {
    padding: 6,
  },
  cityName: {
    fontSize: 18,
  },
  summary: {
    flex: 1,
    flexDirection: 'row',
  },
  label: {
    color: '#888888'
  },
  indicatorText: {
    fontSize: 24,
  }
});
