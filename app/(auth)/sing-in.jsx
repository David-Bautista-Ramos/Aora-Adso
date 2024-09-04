import { View, Text , Image } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import {Link} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'

import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const SingIn = () => {
  const[form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image source={images.logo} 
            resizeMode='contain' className="w-[115px] h-[35px]"
          />
          <Text className="text-white text-2xl text-semibold mt-10 font-psemibold">
            Log in in to Aora
          </Text>

          <FormField
            title="Email"
            values={form.email}
            handleChangeText={(e) => setForm({...form,email:e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          
          <FormField
            title="Password"
            values={form.password}
            handleChangeText={(e) => setForm({...form,password:e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Simg-in"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row-gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Don't have account</Text>
            <Link href="/sing-up" className='text-lg font-psemibold text-secondary'>Sing-Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SingIn