import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.style1}>
            <Text style={{fontSize: 28, fontWeight: 'bold', color: '#403B36'}}>NOTELY</Text>
        </View>
        <View style={styles.style2}>
            <Image source={require('../../assets/home.png')} style={{width: 300, height: 230}} resizeMode='contain'/>
            <Text style={{fontSize: 26, fontWeight: 'bold', width: 307, height: 66, textAlign: 'center', marginTop: 18, color: '#403B36'}}>World’s Safest And Largest Digital Notebook</Text>
            <Text style={{fontSize: 18, width: 308, height: 63, textAlign: 'center', marginTop: 12, color: '#595550'}}>Notely is the world’s safest, largest and intelligent digital notebook. Join over 10M+ users already using Notely.</Text>
        </View>
        <View style={styles.style3}>
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                <View style={{backgroundColor: '#D9614C', borderRadius: 12, width: 319, height: 74, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: '#F8EEE2'}}>Get Started</Text>
                </View>
            </TouchableOpacity>
            
            <View style={{marginTop: 20, flexDirection: 'row'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgba(217, 97, 76, 1)'}}>Already have an account?</Text>
            </View>
        </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8EEE2',
    },
    style1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style2:{
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style3:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
})