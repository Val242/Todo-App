import { createSettingsStyles } from '@/assets/styles/settings.styles';
import DangerZone from '@/components/DangerZone';
import Preferences from '@/components/Preferences';
import ProgressView from '@/components/ProgressView';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
 

    const{ colors } = useTheme();

    const settingsStyles = createSettingsStyles(colors);


  return (

<LinearGradient colors={colors.gradients.background}  style ={settingsStyles.container}>
        {/*HEADER*/}
      <SafeAreaView style = {settingsStyles.safeArea}>
              <View style={settingsStyles.header}>
               <View style={settingsStyles.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settingsStyles.iconContainer}>
              <Ionicons name="settings" size={28} color="#ffffff" />
            </LinearGradient>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>

        <ScrollView 
        style={settingsStyles.scrollView}
          contentContainerStyle={settingsStyles.content}
          showsVerticalScrollIndicator={false}
                    >

              <ProgressView />
              <Preferences />
              <DangerZone/>

        </ScrollView>

      </SafeAreaView>

</LinearGradient>
    
  )
}

export default SettingsScreen