import {View, Text} from 'react-native';
import { Card } from '@rneui/themed';
import React from 'react';
import {useState,useEffect} from 'react';


const Weather = () =>{
    const [tempInfo,setTempInfo] = useState();
    const [location, setLocation] = useState();
    const [weather,setWeather] = useState();
    const url = 'https://open-weather13.p.rapidapi.com/city/Hwaseong/KR';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6b0765ea9bmsh8371ae11d586c86p1653cajsned04854aa1c9',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch(url,options)
            response = await response.json()
            console.log(response.main.temp)
            setTempInfo(response.main.temp)
            setLocation(response.name)
            setWeather(response.weather[0].description)
          }
      
          fetchMyAPI()
        
      }, []);
    return(
        <View className="flex-1 items-center  bg-third">
            <View>
            <Text className="text-5xl text-secondary">날씨</Text>
            </View>
            <View className="flex=1 items-center justify-center m-20 ">
            <Card >
                <Card.Title>{location}</Card.Title>
                <Card.Divider/>
                <Text>{weather}</Text>
                <Text>Temperature:{Math.round(((tempInfo-32)*5/9))}C</Text>
            </Card>
            </View>
        </View>
    )
}

export default Weather;