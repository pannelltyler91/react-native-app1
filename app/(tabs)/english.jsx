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
    const analyzeImage = async()=>{
        try{
            if(!imageUri){
                alert('Please select and image first!!')
                return;
            }
            const apiKey = 'AIzaSyByoef0PnjP9yDcfWBlmzVI30IiF3pqUBA';
            const apiURL = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
            //read the image file from local URI and conver it to base64
            const base64ImageData = await FileSystem.readAsStringAsync(imageUri,{
                encoding:FileSystem.EncodingType.Base64,
            })
        
        const requestData = {
            requests:[
                {
                    image:{
                        content:base64ImageData,
                    },
                    features:[{type:'LABEL_DETECTION',maxResults: 5}],
                },
            ],
        };
        const apiResponse = await fetch(apiURL,requestData)
        console.log(apiResponse._bodyBlob._data)
        setLabels(apiResponse._data.responses[0].labelAnnotations)
        }catch(err){
            console.log('Error analyzing image:',err);
            alert('Error analyzing image. Please try again later');
        }
    }
    return(
        <View className="flex-1 items-center justify-center bg-third">
            <Text className='text-30 font-bold mb-50 mt-100  '>
                English
            </Text>
            {imageUri &&(
                <Image
                source={{uri:imageUri}}
                style={{width: 300, height: 300}}
                />
            )}
            <TouchableOpacity
            onPress={pickImage}
            style={{
                backgroundColor:'#DDDDDD',
                padding:10,
                marginBottom:10,
                marginTop:20,

            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}>Choose an image...</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={analyzeImage}
            >
                <Text>Analyze Image</Text>
            </TouchableOpacity>
            {
                labels.length > 0 && (
                    <View>
                        <Text style={{
                            fontSize:20,
                            fontWeight:'bold',
                            marginTop:20,
                        }}>
                            Labels:
                        </Text>
                        
                        {    
                            labels.map((label) =>(
                                <Text
                                    key={label.mid}
                                    style={{
                                        fontSize:18,
                                        marginBottom:10,
                                    }}                                
                                >
                                    {label.description}
                                </Text>
                            ))








                        }
                    </View>
                )
            }
        </View>
    )
}

export default English;