import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function TopBar() {
  return (
    <View className="bg-white p-3" style={[styles.card, styles.elevation]}>
        <StatusBar
          backgroundColor={"#fff"}
          barStyle={"dark-content"}
          hidden={false}
        />

      <Image className="ml-4" source={require('../../assets/logo.png')} style={{ width: wp(25), height: hp(8) }} />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  },
  elevation: {
    elevation: 10,
    shadowColor: '#52006A',
  },
});