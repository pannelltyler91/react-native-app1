
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Tabs,Redirect} from 'expo-router';
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="flex items-center justify-center gap-2">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };

const TabsLayout = () =>{
    return(
       <>
       <Tabs
       screenOptions={{
        tabBarActiveTintColor: "#444eff",
        tabBarInactiveTintColor: "#544c4a",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#bdd8e1",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}>
        <Tabs.Screen
         name="home"
         options={{
            title:'Home',
            headerShown:false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.sunny}
                  color={color}
                  name="Home"
                  focused={focused}
                />
              ),

         }}
          />
        <Tabs.Screen
         name="news"
         options={{
            title:'News',
            headerShown:false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.feed}
                  color={color}
                  name="News"
                  focused={focused}
                />
              ),

         }}
          />
        <Tabs.Screen
         name="weather"
         options={{
            title:'Weather',
            headerShown:false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.thermostat}
                  color={color}
                  name="Weather"
                  focused={focused}
                />
              ),

         }}
          />
        <Tabs.Screen
         name="sharedPage"
         options={{
            title:'Shared Page',
            headerShown:false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.shared}
                  color={color}
                  name="Shared Page"
                  focused={focused}
                />
              ),

         }}
          />
       </Tabs>
       </>
    )
}

export default TabsLayout;