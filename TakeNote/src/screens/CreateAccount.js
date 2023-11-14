import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'

const CreateAccount = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.style1}>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#403B36'}}>NOTELY</Text>
    </View>
    <View style={styles.style2}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 26, fontWeight: 900, color: '#403B36', textAlign: 'center', width: 308, height: 33, textAlign: 'center'}}>Create a free account</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', width: 380, height: 44, textAlign: 'center', marginTop: 5, color: 'rgba(89, 85, 80, 1)'}}>Join Notely for free. Create and share unlimited notes with your friends.</Text>
        </View>
        <View style={{marginTop: 55}}>
            <View style={{width: 330}}>
                <Text style={{fontSize: 14, fontWeight: 700}}>Full Name</Text>
                <TextInput style={{backgroundColor: 'rgba(255, 253, 250, 1)', borderRadius: 10, marginTop: 8, height: 60, fontSize: 18, fontWeight: 700, color: 'rgba(89, 85, 80, 1)', paddingHorizontal: 16, paddingVertical:19}} placeholder='Tran Huy'/>
            </View>
            <View style={{width: 330, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: 700}}>Email Address</Text>
                <TextInput style={{backgroundColor: 'rgba(255, 253, 250, 1)', borderRadius: 10, marginTop: 8, height: 60, fontSize: 18, fontWeight: 700, color: 'rgba(89, 85, 80, 1)', paddingHorizontal: 16, paddingVertical:19}} placeholder='calocdongda@gmail.com'/>
            </View>
            <View style={{width: 330, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: 700}}>Password</Text>
                <TextInput style={{backgroundColor: 'rgba(255, 253, 250, 1)', borderRadius: 10, marginTop: 8, height: 60, fontSize: 18, fontWeight: 700, color: 'rgba(89, 85, 80, 1)', paddingHorizontal: 16, paddingVertical:19}} placeholder='########'/>
            </View>
        </View>
    </View>
    <View style={styles.style3}>
        <TouchableOpacity onPress={() => console.log('Pressed')}>
            <View style={{backgroundColor: '#D9614C', borderRadius: 12, width: 330, height: 74, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#F8EEE2'}}>Create Account</Text>
            </View>
        </TouchableOpacity>
        
        <View style={{marginTop: 20, flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Login')
            }}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgba(217, 97, 76, 1)'}}>You have an account?</Text>
            </TouchableOpacity>
        </View>
    </View>

</View>
  )
}

export default CreateAccount

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