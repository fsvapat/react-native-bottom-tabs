import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import { useState } from 'react';
import { Platform } from 'react-native';
import { Albums } from '../Screens/Albums';
import { Article } from '../Screens/Article';
import { Chat } from '../Screens/Chat';
import { Contacts } from '../Screens/Contacts';

const Tab = createNativeBottomTabNavigator();

function NativeBottomTabs() {
  const [label, setLabel] = useState('Article');
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      labeled={true}
      hapticFeedbackEnabled={false}
      tabBarInactiveTintColor="#C57B57"
      tabBarActiveTintColor="#F7DBA7"
      tabBarStyle={{
        backgroundColor: '#1E2D2F',
      }}
      rippleColor="#F7DBA7"
      tabLabelStyle={{
        fontFamily: 'Avenir',
        fontSize: 15,
      }}
      activeIndicatorColor="#041F1E"
      screenListeners={{
        tabLongPress: (data) => {
          console.log(
            `${Platform.OS}: Long press detected on tab with key ${data.target} at the navigator level.`
          );
        },
      }}
      onSearchTextChange={(key, text) => {
        console.log('onSearchTextChange', key, text);
      }}
      onSearchSubmit={(key, text) => {
        console.log('onSearchSubmit', key, text);
      }}
    >
      <Tab.Screen
        name="Article"
        component={Article}
        listeners={{
          tabLongPress: (data) => {
            console.log(
              `${Platform.OS}: Long press detected on tab with key ${data.target} at the screen level.`
            );
            setLabel('New Article');
          },
        }}
        options={{
          tabBarButtonTestID: 'articleTestID',
          tabBarBadge: '10',
          tabBarLabel: label,
          tabBarIcon: ({ focused }) =>
            focused
              ? require('../../assets/icons/person_dark.png')
              : require('../../assets/icons/article_dark.png'),
        }}
      />
      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{
          tabBarIcon: () => require('../../assets/icons/grid_dark.png'),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        listeners={{
          tabPress: () => {
            console.log('Contacts tab press prevented');
          },
        }}
        options={{
          tabBarIcon: () => require('../../assets/icons/person_dark.png'),
          tabBarActiveTintColor: 'yellow',
          preventsDefault: true,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        listeners={{
          tabPress: () => {
            console.log('Chat tab pressed');
          },
        }}
        options={{
          tabBarIcon: () => require('../../assets/icons/chat_dark.png'),
          tabBarActiveTintColor: 'white',
          searchable: true,
          searchablePrompt: 'Search for a chat',
        }}
      />
    </Tab.Navigator>
  );
}

export default NativeBottomTabs;
