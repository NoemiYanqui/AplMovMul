/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';

type Props = {};
export default class App extends Component<Props> {
  state={
    data:[],
    loading: false,
    text: ''
  }
  onPressHandler = item => {
    this.props.navigation.navigate('Details')
  }
  renderHeader = item => {
    return (<TextInput style={{height:40, borderColor:'gray', borderWidth:1}}
    onChangeText = {this.searchHandler}
    value = {this.state.text}/>)
  }
  componentDidMount(){
    this.setState({loading:true});
    axios({
      method:'GET',
      url:'http://yts.am/api/v2/list_movies.json'
    }).then(response => {
      this.setState({
        loading: false,
        data: response.data.data.movies
      });
      pelicula = response.data.data.movies
    }).catch(err => {
      this.setState({loading:false});
      console.warn(err);
    })
  }
  searchHandler = text =>{
    this.setState({
      text: text
    }, ()=>{
      axios({
        method: 'GET',
        url:'https://yts.am/api/v2/list_movies.json?query_term='+text
      }).then(response => {
        this.setState({
          data:response.data.data.movies
        });
      }).catch(err => {
        this.setState({loading:false});
        console.warn(err);
      })
      const newData = pelicula.filter(item => {
        const itemData = `${item.title.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        data: newData
      });
    });
  }
  render() {
    let contenido = (<Text>
      Cargando, espere por favor...
      </Text>);
  if (!this.state.loading) {
      contenido = (<FlatList
          keyExtractor={(item, index) => index + ''}
          data={this.state.data}
          renderItem={({ item, index }) => {
              return (<TouchableOpacity onPress={() => this.onPressHandler(item)}>
                  <Text style={index % 2 === 0 ? styles.ItemEven : styles.ItemUneven}>
                      {item.title_long}
                  </Text>
              </TouchableOpacity>);
          }}
          ListHeaderComponent={this.renderHeader}
      />);
  }
    return (
      <View style={styles.container}>
       {contenido}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 /* container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },*/
  ItemEven: {
    color: '#2B4B6F'
  },
  ItemUneven: {
    backgroundColor: '#D46A6A',
    color: 'white'
}
});
