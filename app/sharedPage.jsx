import {StyleSheet, Text, View} from 'react-native';

const 
SharedPage = () =>{
    return(
        <View style={styles.container}>
            <Text>Shared Page</Text>
        </View>
    )
}

export default SharedPage;

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})