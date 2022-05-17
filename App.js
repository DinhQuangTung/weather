import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);
  const bgImg = require('./assets/bg.png')

  const getWeather = async () => {
    try {
      await axios({
        method: 'get',
        url: 'https://api.weatherapi.com/v1/current.json?key=17bc6b7b0ac14c7aa5361629221404&q=Hanoi&aqi=yes'
      }).then(res => {
        setData(res.data);
      })
      
    } catch (error) {
    } finally {
    }
  }

  useEffect(() => {
    getWeather()
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ImageBackground style={styles.container} source={bgImg}>
        <View style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', marginTop: 10 }}>
          <Text style={{ color: '#fff', fontSize: 40, fontWeight: 'bold' }}>weather</Text>
          <Text style={styles.component}>City: {data?.location?.name}</Text>
          <Text style={styles.component}>country: {data?.location?.country}</Text>
          <Text style={styles.component}>temp_c: {data?.current?.temp_c}</Text>
          <Text style={styles.component}>temp_f: {data?.current?.temp_f}</Text>
          <Text style={styles.component}>wind_mph: {data?.current?.wind_mph}</Text>
          <Text style={styles.component}>wind_kph: {data?.current?.wind_kph}</Text>
          <Text style={styles.component}>wind_degree: {data?.current?.wind_degree}</Text>
          <Text style={styles.component}>Cloud: {data?.current?.cloud} %</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  component: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  }
});
