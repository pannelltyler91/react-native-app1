import {View, Text,TouchableOpacity,Image} from 'react-native';
import React, { useState } from 'react';
import { Card } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'


const English = () =>{
    const [imageUri, setImageUri] = useState();
    const [labels, setLabels] = useState([]);

    const pickImage = async () =>{
        try{
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4,3],
                quality:1,
           })
           if(!result.canceled){
            setImageUri(result.assets[0].uri)
           }
           console.log(result);
        } catch(err) {
            console.log(err, "Error picking Image!")
        }
    }

    return(
        <View className="flex-1 items-center justify-center bg-third">
            <Text>English</Text>
            
        </View>
    )
}

export default English;