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
          uri: 'https://png.pngtree.com/thumb_back/fw800/background/20210316/pngtree-vertical-version-of-pink-cherry-blossom-photography-in-spring-image_586854.jpg',
        }}
      >
         <View style={{ 
          justifyContent: 'center',
          flex:7

       }}>
          <Text style ={{
            fontSize: 28,
            textAlign: 'center',
            alignItems: 'center',
            marginTop: 440,
            fontWeight: 'bold',
            color: '#FF0000',
            padding: 5,
            

          }}>Màu Hồng Mùa Xuân Hoa đào </Text>
          
        </View>
        <View style={{
        flex: 3,
        backgroundColor:'#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,


      }}>
        <View style= {{
          flexDirection:'row',
          padding:10
        }}>
        <Icon name='map-pin' size={30} color={'black'} style={{marginTop:20, margin:5}}/> 
        <Text style={{
          fontSize: 25,
          fontWeight:'bold',
          color: 'black',
          marginTop: 10,
          padding:5,

        }}>Hà Nội</Text>
        <Icon name='heart' size={30} color={'red'} style={{marginTop:5, marginLeft:230}}/> 

        </View>
        <Text style={{
          fontSize:14,
          fontWeight: 'bold',
          color: 'black',
          padding:12,
          

        }}>Thành phố Hà Nội là thủ đô của nước Cộng hòa Xã hội chủ nghĩa Việt Nam. Nằm giữa đồng bằng sông Hồng bao gồm 12 quận, 17 huyện. Thành phố Hà Nội sớm trở thành một trung tâm chính trị, kinh tế và văn hóa phát triển bậc nhất của Việt Nam. Thành phố Hà Nội là thành phố Trực thuộc Trung ương được xếp vào hạng đô thị loại đặc biệt cùng với thành phố Hồ Chí Minh.</Text>
      </View>
      </ImageBackground>
      {/* body */}
      
      {/* footer */}
      <View style={{
        height:60,
        backgroundColor: '#33CCFF',
        flexDirection: 'row'

      }}>
        <Text style={{
          fontSize:17,
          fontWeight: 'bold',
          color: 'black',
          padding:17,
          marginLeft:10

        }}>
          $100/ngay
        </Text>
        <TouchableOpacity activeOpacity={0.5} style={{
                                            padding: 10,
                                            borderRadius: 20,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#eee',
                                            width: 120,
                                            height: 50,
                                            marginTop:4,
                                            marginLeft:130
                                            
                                        }} >
                                    
                                        
                                        
                                    

                                        <Text style={{
                                            color: 'blue',
                                            fontWeight: 'bold',
                                            fontSize: 20
                                        }}>Đăng ký</Text>

                                    
                                </TouchableOpacity>
      </View>
    </View>
  )
}

export default App

// import { View, Text } from 'react-native'
// import React from 'react'
// import Demo from './Lab5/bai2_ph35172'

// const App = () => {
//   return (
//     <View>
//       <Demo/>
//     </View>
//   )
// }

// export default App