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
      data: mockData.channel
    };
  }

  render () {
    return (
      <View style={{paddingTop:20, height: 250}}>
        <CityWeather data={this.state.data} />
      </View>
    );
  }
}

const mockData = {
   "channel": {
    "units": {
     "distance": "mi",
     "pressure": "in",
     "speed": "mph",
     "temperature": "F"
    },
    "title": "Yahoo! Weather - New York, NY, US",
    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2459115/",
    "description": "Yahoo! Weather for New York, NY, US",
    "language": "en-us",
    "lastBuildDate": "Mon, 07 Aug 2017 03:43 AM EDT",
    "ttl": "60",
    "location": {
     "city": "New York",
     "country": "United States",
     "region": " NY"
    },
    "wind": {
     "chill": "66",
     "direction": "245",
     "speed": "7"
    },
    "atmosphere": {
     "humidity": "75",
     "pressure": "1017.0",
     "rising": "0",
     "visibility": "16.1"
    },
    "astronomy": {
     "sunrise": "5:58 am",
     "sunset": "8:5 pm"
    },
    "image": {
     "title": "Yahoo! Weather",
     "width": "142",
     "height": "18",
     "link": "http://weather.yahoo.com",
     "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
    },
    "item": {
     "title": "Conditions for New York, NY, US at 03:00 AM EDT",
     "lat": "40.71455",
     "long": "-74.007118",
     "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2459115/",
     "pubDate": "Mon, 07 Aug 2017 03:00 AM EDT",
     "condition": {
      "code": "26",
      "date": "Mon, 07 Aug 2017 03:00 AM EDT",
      "temp": "67",
      "text": "Cloudy"
     },
     "forecast": [
      {
       "code": "47",
       "date": "07 Aug 2017",
       "day": "Mon",
       "high": "69",
       "low": "66",
       "text": "Scattered Thunderstorms"
      },
      {
       "code": "39",
       "date": "08 Aug 2017",
       "day": "Tue",
       "high": "80",
       "low": "66",
       "text": "Scattered Showers"
      },
      {
       "code": "34",
       "date": "09 Aug 2017",
       "day": "Wed",
       "high": "80",
       "low": "64",
       "text": "Mostly Sunny"
      },
      {
       "code": "30",
       "date": "10 Aug 2017",
       "day": "Thu",
       "high": "80",
       "low": "65",
       "text": "Partly Cloudy"
      },
      {
       "code": "28",
       "date": "11 Aug 2017",
       "day": "Fri",
       "high": "78",
       "low": "69",
       "text": "Mostly Cloudy"
      },
      {
       "code": "30",
       "date": "12 Aug 2017",
       "day": "Sat",
       "high": "78",
       "low": "69",
       "text": "Partly Cloudy"
      },
      {
       "code": "47",
       "date": "13 Aug 2017",
       "day": "Sun",
       "high": "79",
       "low": "71",
       "text": "Scattered Thunderstorms"
      },
      {
       "code": "47",
       "date": "14 Aug 2017",
       "day": "Mon",
       "high": "80",
       "low": "73",
       "text": "Scattered Thunderstorms"
      },
      {
       "code": "4",
       "date": "15 Aug 2017",
       "day": "Tue",
       "high": "79",
       "low": "71",
       "text": "Thunderstorms"
      },
      {
       "code": "30",
       "date": "16 Aug 2017",
       "day": "Wed",
       "high": "79",
       "low": "69",
       "text": "Partly Cloudy"
      }
     ],
     "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/26.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Mon - Scattered Thunderstorms. High: 69Low: 66\n<BR /> Tue - Scattered Showers. High: 80Low: 66\n<BR /> Wed - Mostly Sunny. High: 80Low: 64\n<BR /> Thu - Partly Cloudy. High: 80Low: 65\n<BR /> Fri - Mostly Cloudy. High: 78Low: 69\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2459115/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>",
     "guid": {
      "isPermaLink": "false"
     }
    }
   }
 };
