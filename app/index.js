import {StatusBar} from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Card } from '@rneui/themed';
import {Link} from 'expo-router'
import { useState,useEffect } from 'react';

export default function App () {
const [quote,setQuote] = useState('');
const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6b0765ea9bmsh8371ae11d586c86p1653cajsned04854aa1c9',
		'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
	}
};

useEffect(() => {
    async function fetchMyAPI() {
        let response = await fetch(url,options)
        response = await response.json()
        console.log(response.text)
        setQuote(response.text)
      }
  
      fetchMyAPI()
    
  }, []);

    return(
        <View className="flex-1 items-center justify-center bg-primary">
            <StatusBar style='auto'  />
            <Link className="text-5xl text-secondary" href='/home' >굿모닝 애구야!</Link>
            <View >
                <Card className="flex-1 items-center justify-center bg-third">
                    <Card.Title className="text-3xl text-third">{quote}</Card.Title>
                </Card>
            </View>
        </View>
    )
}

