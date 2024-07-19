import {StatusBar} from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Card } from '@rneui/themed';
import {Link} from 'expo-router'

export default function App () {
    return(
        <View className="flex-1 items-center justify-center bg-primary">
            <StatusBar style='auto'  />
            <Link className="text-5xl text-secondary" href='/home' >굿모닝!</Link>
            <View >
                <Card className="flex-1 items-center justify-center bg-third">
                    <Card.Title className="text-3xl text-third">Quote</Card.Title>
                </Card>
            </View>
        </View>
    )
}

