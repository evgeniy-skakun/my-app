import {
  DrawerActions,
  NavigationContainer,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

import NotFoundScreen from '@screens/NotFoundScreen';
import {
  RootDrawerParamList,
  RootStackParamList,
  RootTabParamList,
} from '@src-types/types';

import Theme from '@assets/Theme';

import LinkingConfiguration from './LinkingConfiguration';
import { navigationRef } from './RootNavigation';
import SettingsScreen from '@screens/Settings/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '@screens/Tabs/ExploreScreen';
import ProfileScreen from '@screens/Tabs/ProfileScreen';
import {
  selectUserProfile,
  useAppDispatch,
  useAppSelector,
} from '@hooks/useAppHooks';
import { authStateChanged } from '@store/userSlice';
import NavBarButtonView from '@components/Atoms/NavBarButtonView';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

const headerLargeTitleOptions: Pick<
  NativeStackNavigationOptions,
  | 'headerTitleStyle'
  | 'headerShadowVisible'
  | 'headerTitleAlign'
  | 'headerLargeTitle'
  | 'headerLargeTitleStyle'
> = {
  headerLargeTitle: true,
  headerLargeTitleStyle: {
    fontFamily: 'GorditaBold',
    color: Theme.COLORS.DARK,
  },
  headerTitleStyle: {
    fontFamily: 'GorditaBold',
    color: Theme.COLORS.DARK,
  },
  headerTitleAlign: 'center',
  headerShadowVisible: false,
};

const drawerLabelStyle = {
  fontFamily: 'GorditaBold',
};

const tabBarOptions = {
  tabBarLabelStyle: {
    fontFamily: 'GorditaBold',
  },
};

const Navigation = () => {
  const dispatch = useAppDispatch();

  /**
   * Updating user initialization data when auth state changed
   */
  useEffect(() => {
    // const uid = auth().currentUser?.uid;

    // if (uid) {
    //   // set cached profile before user data is loaded
    //   dispatch(setCachedProfile(uid));
    // }

    // const unsubscribe = auth().onAuthStateChanged((user) =>
    dispatch(authStateChanged('...'));
    // );
    // return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
      theme={Theme.RN_DEFAULT}>
      <RootNavigator />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  // if user is logged in show app else show auth options uid ? 'Root' : 'Welcome'
  const initialRouteName = 'Root';

  return (
    <RootStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerTitleAlign: 'center' }}>
      <RootStack.Screen
        name='Root'
        component={RootDrawerNavigator}
        options={{ headerShown: false, animation: 'fade' }}
      />
      {/* <RootStack.Screen
        name='Welcome'
        component={...}
        options={{ headerShown: false, animation: 'fade' }}
      /> */}
      <RootStack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          headerTitle: 'Settings',
          title: 'Settings',
        }}
      />
      <RootStack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </RootStack.Navigator>
  );
};

/**
 * A drawer navigator displays a drawer menu
 */
const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

const RootDrawerNavigator = () => {
  const [activeTab, setActiveTab] = useState<string>('Home');

  const profile = useAppSelector(selectUserProfile);

  return (
    <RootDrawer.Navigator
      screenOptions={{ headerTitleAlign: 'center', drawerType: 'slide' }}
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label='Home'
            labelStyle={drawerLabelStyle}
            icon={(props) => (
              <Entypo name='map' size={props.size} color={props.color} />
            )}
            focused={activeTab === 'Home'}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.jumpTo('Home'));
              setActiveTab('Home');
            }}
          />
          <DrawerItem
            label='Settings'
            labelStyle={drawerLabelStyle}
            icon={(props) => (
              <Entypo name='cog' size={props.size} color={props.color} />
            )}
            focused={activeTab === 'Settings'}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.jumpTo('Settings'));
              setActiveTab('Settings');
            }}
          />
        </DrawerContentScrollView>
      )}>
      <RootDrawer.Screen
        name='Home'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootDrawer.Screen
        name='Settings'
        component={SettingsNavigator}
        options={{ headerShown: false }}
      />
    </RootDrawer.Navigator>
  );
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName='Explore'>
      <BottomTab.Screen
        name='Explore'
        component={ExploreNavigator}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo
              name='map'
              size={Theme.SIZES.TAB_BAR_ICON_SIZE}
              color={color}
            />
          ),
          ...tabBarOptions,
        })}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileNavigator}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo
              name='user'
              size={Theme.SIZES.TAB_BAR_ICON_SIZE}
              color={color}
            />
          ),
          ...tabBarOptions,
        })}
      />
    </BottomTab.Navigator>
  );
};

const ExploreStack = createNativeStackNavigator();

function ExploreNavigator() {
  return (
    <ExploreStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <ExploreStack.Screen
        name='ExploreScreen'
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
    </ExploreStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileNavigator() {
  const navigation = useNavigation();

  const openSettings = () => {
    navigation.dispatch(StackActions.push('Settings'));
  };

  return (
    <ProfileStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <ProfileStack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          headerTitle: 'My Profile',
          title: 'My Profile',
          headerLeft: () => (
            <NavBarButtonView
              icon='menu'
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
          headerRight: () => (
            <NavBarButtonView icon='cog' onPress={openSettings} />
          ),
          ...headerLargeTitleOptions,
        }}
      />
    </ProfileStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsNavigator() {
  const navigation = useNavigation();

  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name='SettingsScreen'
        component={SettingsScreen}
        options={{
          headerLeft: () => (
            <NavBarButtonView
              icon='menu'
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
          headerTitle: 'Settings',
          title: 'Settings',
          ...headerLargeTitleOptions,
        }}
      />
    </SettingsStack.Navigator>
  );
}

export default Navigation;
