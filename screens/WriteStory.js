import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Header } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import db from '../Config'

export default class SearchScreen extends React.Component {

  constructor(){
    super()
    this.state = {
      allTransactions: [],
      lastVisibleTransaction: null,
      search: "",
    }
  }

  render(){
    return(
      <View>
        <Header>
          Write A Story
        </Header>
        <TextInput
        placeholder = "Heading"
        onChangeText = {(text)=>{
          this.setState({
            search: text
          })
        }}
        />
        <TextInput
        placeholder = "Author"
        onChangeText = {(text)=>{
          this.setState({
            search: text
          })
        }}
        />
        <TextInput
        placeholder = "Write Your Story"
        onChangeText = {(text)=>{
          this.setState({
            search: text
          })
        }}
        />
        <TouchableOpacity
        onPress = {()=>{
          this.searchTransactions(this.state.search)
        }}>
         <Text>
           Submit  
         </Text> 

        </TouchableOpacity>
        <FlatList
        data = {this.state.allTransactions}
        renderItem = {({item})=>(
          <View style = {{borderBottomWidth: 2}}>
             <Text>
               {"book ID" + item.bookID}
             </Text>
             <Text>
               {"student ID" + item.studentID}
             </Text>
             <Text>
               {"transactionType" + item.transactionType}
             </Text>
          </View>
        )}
        keyExtractor = {(item, index)=>{
           index.toString()
        }}
        onEndReached = {this.fetchMoreTransaction()}
        onEndReachedThreshold = {0.7}
        />
      </View>
    )
  }
   
}

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
