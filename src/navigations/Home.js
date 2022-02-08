import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChannelList, Profile } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../theme";

const TabIcon = ({ name, focused }) => {
  return (
    <MaterialIcons
      name={name}
      size={26}
      color={focused ? theme.tabBtnActive : theme.tabBtnInActive}
    />
  );
};

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="List"
        component={ChannelList}
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({
              name: focused ? "chat-bubble" : "chat-bubble-outline",
              focused,
            }),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({
              name: focused ? "person" : "person-outline",
              focused,
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
