import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import favourite from '../assets/icons/icons8-favourite-100.png';
import HomeIcon from '../assets/icons/icons8-home-100.png';
import ProfileIcon from '../assets/icons/icons8-profile-100.png';
import SearchIcon from '../assets/icons/icons8-search-100.png';
import FavouriteScreen from './screens/FavouriteScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function BottomTabsScreen(){
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: true,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ focused }) => (
//             <Image
//               source={HomeIcon}
//               style={{
//                 width: 24,
//                 height: 24,
//                 tintColor: focused ? '#007AFF' : '#8e8e93',
//               }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{
//           title: 'Search',
//           tabBarIcon: ({ focused }) => (
//             <Image
//               source={SearchIcon}
//               style={{
//                 width: 24,
//                 height: 24,
//                 tintColor: focused ? '#007AFF' : '#8e8e93',
//               }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ focused }) => (
//             <Image
//               source={ProfileIcon}
//               style={{
//                 width: 24,
//                 height: 24,
//                 tintColor: focused ? '#007AFF' : '#8e8e93',
//               }}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

export default function RootLayout() {
  return (
    // <NavigationContainer>
    //     <Stack.Navigator 
    //       initialRouteName='Splash'
    //       screenOptions={{headerShown:false}}>
    //       <Stack.Screen 
    //       name="Splash" 
    //       component={SplashScreen}
    //       options={{headerShown:false}}
    //       >
    //       </Stack.Screen>

    //       <Stack.Screen
    //       name="Main"
    //       component={BottomTabsScreen}
    //       options={{headerShown:false}}
    //       >
    //       </Stack.Screen>
    //     </Stack.Navigator>
    // </NavigationContainer>

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={HomeIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#007AFF' : '#8e8e93',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <Image
              source={SearchIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#007AFF' : '#8e8e93',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={ProfileIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#007AFF' : '#8e8e93',
              }}
            />

          ),
        }}
      />

      <Tab.Screen 
      name='Favourite' 
      component={FavouriteScreen}
      options={{
        title:'Favourite',
        tabBarIcon:({focused})=>(
          <Image source={favourite}
           style={{
            height:24,
            width:24,
            tintColor:focused?'#007AFF' : '#8e8e93'
          }}/>
        )
      }}>

      </Tab.Screen>
    </Tab.Navigator>
    
  );
}
