import {Text,Image,View,ScrollView,Button,Alert} from 'react-native';
export default function Home(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'gray',
        alignItems:'center'
      }}>
      <Text style={{
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
        margin:30,
      }}>Selamat Datang Di Tokoh Penjualan Baju Online</Text> 
      <Image source={{
        uri:'https://id-live-01.slatic.net/p/bda9f5e9ab3f383849ba5a3cf35322a7.jpg'}} style={{width:400,height:200,margin:70}}/>
        <Text style={{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        margin:40}}>Selamat Berbelanja dan Nikmati Harimu</Text>
      </View>
    )
}