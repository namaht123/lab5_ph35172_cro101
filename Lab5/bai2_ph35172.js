import { View, Text, ImageBackground, StatusBar } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ height:800 }}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.5)" />
      <ImageBackground
        style={{flex: 1  }}
        source={{
          uri: 'https://png.pngtree.com/thumb_back/fw800/background/20210316/pngtree-vertical-version-of-pink-cherry-blossom-photography-in-spring-image_586854.jpg',
        }}
      >
        <View style={{ 
          justifyContent: 'center',
          

       }}>
          <Text style ={{
            fontSize: 50,
            textAlign: 'center',
            alignItems: 'center',
            marginTop: 300,
            fontWeight: 'bold',
            color: 'black'

          }}>Màu Hồng Mùa Xuân Hoa Anh đào </Text>
          
        </View>
      </ImageBackground>
    </View>
  )
}

export default App