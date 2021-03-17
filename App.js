import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ReadStory from './screens/ReadStory'
import WriteStory from './screens/WriteStory'

export default class App extends React.Component {
  render(){
    return(
      <View style = {styles.container}>
       <AppContainer/>
      </View>
    )
  }
   
}

const TabNavigator = createBottomTabNavigator({
  writeStory: {screen: WriteStory},
  readStory: {screen: ReadStory}
},
{
  defaultNavigationOptions: ({navigation}) =>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName
    }
  })
}
)

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
