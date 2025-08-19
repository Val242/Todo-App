import { createHomeStyles } from '@/assets/styles/home.styles';
import Header from '@/components/Header';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; //to maintain our app in a safe area

export default function Index() {
  const { toggleDarkMode,colors } = useTheme();

  //const styles = createStyles(colors)
  const homeStyles = createHomeStyles(colors)


const addTodo = useMutation(api.todos.addTodo)

  return (

    <LinearGradient colors={colors.gradients.background} style = {homeStyles.container} >
      <StatusBar barStyle={colors.statusBarStyle}/>
    <SafeAreaView style={homeStyles.safeArea}>

          <Header/>










      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
    
    
      
    </SafeAreaView>
    /</LinearGradient>
  );
}

//const createStyles = (colors:ColorScheme) => {
 // const styles = StyleSheet.create({
   // container: {
   //   flex: 1,
    //  justifyContent: "center",
    //  alignItems: "center",
      //backgroundColor:colors.bg//used fom the hook folder
   // },
  //  content: {}
//  });
//  return styles;
//}
