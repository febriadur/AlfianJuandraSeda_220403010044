import {Text,Image,View,ScrollView,Button,Alert} from 'react-native';
export default function HomeScreen(){
    return(
        <View
        style={{
            flex:1,
            alignItems:'center',
            backgroundColor:'light grey'
            }}>
        
        <Text style={{
            fontSize: 10,
            fontWeight:'bold',
        }}>produk</Text>
        <ScrollView>
        <Image source={{
            uri:("https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-9931787/morastore_morastore_team_player__hoodie_pria_jaket_sweater_pria_jaket_hoodie_pria_sweater_hoodie_pria_full02_rvjuv0dx.jpg")
        }}style={{width:200,height:200,margin:5}} /> 
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        
        <Button title="Beli" color='gray' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://img.ws.mms.shopee.co.id/cde4d431cb4b6e89a291c0a4ad335a03")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='gray' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image 
        source={{
            uri:("https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/3/4/3af5f591-9c30-4feb-b336-bbec09a0a544.jpg" )
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='gray' onPress={() => Alert.alert ('Berhasil Dibeli')} />
            
        <Image source={{
            uri:("https://images.tokopedia.net/img/cache/250-square/hDjmkQ/2023/11/28/b162d0cd-24d5-411a-a9b7-821a618a4d38.jpg?ect=4g")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='gray' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://images.tokopedia.net/img/cache/250-square/VqbcmM/2020/11/19/88f97f10-015c-44bd-8ed6-39e69d4c0639.jpg?ect=4g")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='gray' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://images.tokopedia.net/img/cache/700/VqbcmM/2020/11/5/0397c20c-e393-4caf-adda-ccb4c7c8cf5d.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='gray' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrTEq7fbMuBPPof9np9GbSM0z8cn-eip7oj7HxQep_8m2_GzAmRULa_GVN7oEjlYcpi8&usqp=CAU")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='gray' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://down-id.img.susercontent.com/file/sg-11134201-22110-eigk71mzqsjv43_tn")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='gray' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCl8DPwkgLkcywWv-MgXL7G-Ki9847IrNkdhTpviqiBQeGBJFPR-cNdg9i3gpcGVIwyc0&usqp=CAU")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='gray' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://id-test-11.slatic.net/p/6c10fc5ff97f7754a083fabd80341cb4.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='gray' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        </ScrollView>
        
        </View>
    )
}