import { View, Text ,TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'

import {icons, images} from '../constants'

const FormField = (title, value, palceholder, handleChangeText, otherStyles, ...props) => {
    const [showPassword, setshowPassword] = useState(false)
  return (
    <View className={`space-y-2" ${otherStyles}`}>
      <Text clasName="text-base text-gray-100 font-pmedium" >{title}</Text>

      <View className="borde-2 border-red-500 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-seconday items-center flex-row">
        <TextInput 
            clasName="flex-2 text-white font-psemibold text-base"
            value={value}
            placeholder={palceholder}
            palceholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'password' && !showPassword}
        />

        {title === 'password' && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyeHide} clasName="w-6 h-6" resizeMode='contain'/>
            </TouchableOpacity>
        )}
      </View>

    </View>
  )
}

export default FormField