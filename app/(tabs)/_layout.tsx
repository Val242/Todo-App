import { Ionicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarStyle: {
            backgroundColor: "#1e293b",
            borderTopWidth: 1,
            borderTopColor: "yellow",
            height: 90,
            paddingBottom: 30,
            paddingTop: 10
        },
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600"
        },
        headerShown: false
    }}>

        <Tabs.Screen //Relates to an overall screen and how it is displayed
            name='index'//here is the name of the component or file who's content is going to be displayed in the screen
            options={{
                title: "Todos",
                tabBarIcon: ({color,size}) => (
                    <Ionicons name='flash-outline' size={size} color={color}/>      
                )
            }}
        
        />

          <Tabs.Screen 
            name='settings'//name of the file which it represents
            options={{
                title: "Settings",
                tabBarIcon: ({color,size}) => (
                    <Ionicons name='settings' size={size} color={color}/> 
                    //size and color are default attributes depending 
                    //on the active state of the tab. 
                    //Better still you can define them under screenOptions     
                )
            }}
            
        
        />

     


    </Tabs>

    
  )
}

export default TabsLayout

