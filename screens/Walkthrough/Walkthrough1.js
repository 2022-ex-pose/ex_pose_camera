import React from 'react';
import {
  View,
  Image
} from 'react-native';

import { FlatList } from "react-native-gesture-handler"

import {constants} from "../../constants";

const ITEM_WIDTH = 120;

const Walkthrough1 = () => {
  const [row1Images, setRowImages] = React.useState([
    ...constants.walkthrough_01_01_images
  ])

  const [currentPosition,setCurrentPosition] = React.useState(0)

  const row1FlatListRef = React.useRef()

  return (
    <View>
      {/*Slider 1*/}
      <FlatList
        ref={row1FlatListRef}
        delcelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        listKey="Slider1"
        keyExtractor={(_, index)=> `Slider1_${index}`}
        data={row1Images}
        renderItem={({item, index}) => {
      return (
        <View
        style={{
          width: ITEM_WIDTH,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 120
        }}
        >
          <Image
            source={item}
            style={{
              width:250,
              height: 250,
              
            }}
            resizeMode= 'contain'
          />
          </View>
        )
        }}
      />
    </View>
  )
}

export default Walkthrough1;