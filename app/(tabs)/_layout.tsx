import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const RootLayout = () => {
  return (
    <>
      <Tabs>
        {/* Home Tab */}
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
          }}
        />

        {/* Explore Tab */}
        <Tabs.Screen
          name="explore"
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size }) => <Ionicons name="image-outline" color={color} size={size} />,
          }}
        />

        {/* Settings Tab */}
        <Tabs.Screen
          name="settings"
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" color={color} size={size} />,
          }}
        />

        {/* Profile Tab */}
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
          }}
        />

        {/* Detail Tab */}
        <Tabs.Screen
          name="detail"
          options={{
            tabBarLabel: 'Detail',
            tabBarIcon: ({ color, size }) => <Ionicons name="information-circle-outline" color={color} size={size} />,
          }}
        />
      </Tabs>
    </>
  );
}

export default RootLayout;
