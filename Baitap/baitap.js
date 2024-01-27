import { View, Text, StatusBar, ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


const App = () => {
  return (
    <View style= {{
      height:800

    }}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.5)" />
      <ImageBackground
        style={{flex: 7  }}
        source={{
          uri: 'https://tse1.mm.bing.net/th?id=OIP.SJl6HKJ2i7JyelKMDFvL2AHaKu&pid=Api&P=0&h=220',
        }}
      >
         <View style={{ 
          justifyContent: 'center',
          flex:7

       }}>
          
        </View>
        <View style ={{
            height:70,
            backgroundColor: 'red',
            flexDirection: 'row'
        }}>
            <View style={{width:100}}>
        <Text style ={{
            fontSize: 28,
            
            alignItems: 'center',           
            fontWeight: 'bold',
            color: '#fff',
            padding: 5,
            marginTop:10
            

          }}>10.10 </Text></View>
          <View style ={{width:180}}>
          <Text style ={{
            color: '#fff',
            fontSize: 15,
            padding:5,
            marginTop:10
          }}>Cho gia d199.000 vao 10 TH7 luc 00.00</Text></View>
          
<TouchableOpacity activeOpacity={0.5} style={{
                                            padding: 10,
                                            
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            
                                            width: 110,
                                            height: 45,
                                            marginTop:14,
                                            marginLeft:10
                                            
                                        }} >
                                    
                                        
                                     <View>  
                                    <Text style={{
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            fontSize: 10,
                                            textAlign: 'center',
                                            borderColor:'#fff',
                                            borderWidth: 1,
                                            height:30,
                                            width:90,
                                            padding:6,
                                            
                                        }}>Nhac nho toi sau </Text></View> 

                                        <Text style={{
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            fontSize: 10,
                                            textAlign: 'center'
                                        }}>Them vao gio hang tu dong </Text>

                                    
                                </TouchableOpacity>

        </View>
        <View style={{
        flex: 4.35,
        backgroundColor:'#fff',
        


      }}>
        <View style= {{
          flexDirection:'row',
          padding:10
        }}>
         <View style={{
            flexDirection: 'row'
         }}>
        <Text style={{
          fontSize: 11,
          fontWeight:'bold',
          color: '#fff',
          margin:1,
          padding:2,
          height:20,
          backgroundColor:'red'

        }}>Yeu thich +</Text>
        <Text style={{
             fontSize: 14,
             fontWeight:'bold',
             color: '#000',
             width:300,
             marginLeft:5
        }}>Cua hang quan ao nam chat lieu vai cao cap hien dang duoc giam gia duy nhat tai ngay 10.10
            </Text></View>
        <Icon name='heart' size={30} color={'red'} style={{marginTop:5, }}/> 

        </View>
        <Text style={{
          fontSize:16,
          fontWeight: 'bold',
          color: 'red',
          padding:1,
          marginLeft:15

        }}>d199.000 </Text>
        <View style={{flexDirection:'row', marginLeft:15}}>
            <Icon name='star' size={20} color={'orange'} style={{marginTop:5, }}/>
            <Icon name='star' size={20} color={'orange'} style={{marginTop:5, }}/>
            <Icon name='star' size={20} color={'orange'} style={{marginTop:5, }}/>
            <Icon name='star' size={20} color={'orange'} style={{marginTop:5, }}/>
            <Icon name='star' size={20} color={'orange'} style={{marginTop:5, }}/>
            <Text style={{
          fontSize:16,
          fontWeight: 'bold',
          color: '#000',
          padding:5,
          marginLeft:3

        }}>5.0</Text>
        <Text style={{
          fontSize:16,
          fontWeight: 'bold',
          color: '#000',
          padding:5,
          marginLeft:3


        }}>Da ban 15K </Text>
        <Icon name='heart' size={22} color={'gray'} style={{marginTop:5,marginLeft:20 }}/> 
        <Icon name='sda' size={22}  style={{marginTop:5,marginLeft:30 }}/> 
        <Icon name='sda' size={22}  style={{marginTop:5,marginLeft:30 }}/> 
        


        </View>
        <View style={{backgroundColor:'#eee', height:10}}></View>
        <View style={{
            flexDirection:'row'
        }}>
            <Text style={{
                fontSize:16,
                fontWeight: 'bold',
                color: '#000',
                padding:15,
                marginLeft:3
            }}>Voucher cua shop</Text>
            <Text style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: '#fff',
                padding:2,
                marginLeft:130,
                backgroundColor:'orange',
                height:20,
                marginTop:15
            }}>Giam 10%</Text>
              <Text style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: '#fff',
                padding:2,
                marginLeft:4,
                backgroundColor:'orange',
                height:20,
                marginTop:15
            }}>Giam 20%</Text>
        </View>
        <View style={{backgroundColor:'#eee', height:10}}></View>
        <View style={{
            flexDirection: 'row'
        }}>
            <Text style={{
                fontSize:16,
                fontWeight: 'bold',
                color: '#000',
                paddingTop:15,
                marginLeft:20,
            }}>Gia ban buon/si</Text>
            <Text style={{
                fontSize:13,
                fontWeight: '400',
                color: '#000',
                padding:18,
                
            }}>Gia chi con d159.000 khi mua 2 san pham</Text>
        </View>

      </View>
      </ImageBackground>
      {/* body */}
      
      {/* footer */}
      <View style={{
        height:60,
        backgroundColor: '#33CCFF',
        flexDirection: 'row'

      }}>
       <TouchableOpacity activeOpacity={0.5} style={{
                                            padding: 1,
                                            borderRadius: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#33CCFF',
                                            width: 100,
                                            height: 60,
                                            marginTop:0,
                                            marginLeft:0,
                                            borderColor:'gray',
                                            borderWidth: 1
                                            
                                        }} >
        <Icon name='shop' size={22} color={'red'}  style={{marginTop:0,marginLeft:0 }}/> 
                               
                                            
                                </TouchableOpacity>
                                <View></View>
                                <TouchableOpacity activeOpacity={0.5} style={{
                                            padding: 1,
                                            borderRadius: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#33CCFF',
                                            width: 100,
                                            height: 60,
                                            marginTop:0,
                                            marginLeft:0,
                                            borderColor:'gray',
                                            borderWidth: 1
                                            
                                        }} >
        <Icon name='shop' size={22} color={'red'}  style={{marginTop:0,marginLeft:0 }}/> 
                               
                                             
                                </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={0.5} style={{
                                            padding: 1,
                                            borderRadius: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'red',
                                            width: 215,
                                            height: 60,
                                            marginTop:0,
                                            marginLeft:0,
                                            borderColor:'gray',
                                            borderWidth: 1
                                            
                                        }} >
                               
                                        <Text style={{
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            fontSize: 20
                                        }}>Mua ngay</Text>     
                                </TouchableOpacity>
      </View>
    </View>
  )
}

export default App