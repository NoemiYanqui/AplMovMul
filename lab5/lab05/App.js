/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';

const people= [
  {name:'Carlos', lastname:'Amezquita'},
  {name:'Marta', lastname:'Chavez'},
  {name:'Pedro', lastname:'Picapiedra'},
  {name:'Lucía', lastname:'Gonzales'}
]

type Props = {};
export default class App extends Component<Props> {
  state={
    contador:1,
    fecha: new Date(),
   // data:people,
    text:'',
    loading: false,
    data:[]
  }
  componentDidMount(){
    this.setState({loading:true});
    axios({
      method: 'GET',
      url:'https://yts.am/api/v2/list_movies.json'
    }).then(response=>{
      this.setState({
        loading:false,
        data: response.data.data.movies
      });
    }).catch(err =>{
      this.setState({loading:false});
      console.warn(err);
    })
  }
  onPressHandler = item=>{
    //alert('El apellido es '+ item.lastname);
    alert(item.description_full);
  }
  renderHeader=() =>{
    return (<TextInput
      style={{height:40, borderColor:'gray', borderWidth:1}}
      onChangeText={this.searchHandler}
      value={this.state.text}
    />
    );
  }
  searchHandler = text=>{
    this.setState({
      text:text },()=>{
        const newData = people.filter(item => {
          const itemData = `${item.name.toUpperCase()}`;
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1 ;
        });
        this.setState({data:newData});
      });
  }
 
 /* componentDidMount(){
    setInterval(()=>this.setState({contador: this.state.contador +1}),1000);
    setInterval(()=>this.setState({fecha:new Date()}),1000)
  }
  */
  render() {

    let contenido = (<Text>
      Cargando, espere por favor ...
    </Text>);
    if(!this.state.loading){
      contenido=(<FlatList
        keyExtractor = {(item, index)=> index+''}
        data={this.state.data}
        renderItem={({item, index})=>{
          return(<TouchableOpacity
          onPress={()=>this.onPressHandler(item)}>
          <Text style={index%2===0?styles.ItemEven:styles.ItemUneven}>
            {item.title_long}
          </Text>
          </TouchableOpacity>);
        }}
        ListHeaderComponent={this.renderHeader}
      />);
    }
    return (<View>
      {contenido}
    </View>)
    
    /*return(<View>
      <FlatList
        keyExtractor={(item, index)=> index+''}
        data={this.state.data}
        renderItem={({item,index})=>{
          return(<TouchableOpacity onPress={()=> this.onPressHandler(item)} >
          <Text style={
            index%2===0?styles.ItemEven:styles.ItemUneven}>
            {item.name }
            </Text>
            </TouchableOpacity>)
        }}
        ListHeaderComponent={this.renderHeader}
      />
    </View>

    )
*/

 /*   const fecha = this.state.fecha.getHours()+':'+this.state.fecha.getMinutes()+
    ':'+this.state.fecha.getSeconds();
        return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Veamos nuestro contador autónomo</Text>
        <Text style={styles.instructions}>{this.state.contador}</Text>
        <Text style={styles.welcome}>Veamos nuestro RELOJ</Text>
        <Text style={styles.instructions}>{fecha}</Text>
        <FlatList
          data={[{key:'a'},{key:'b'},{key:'c'}]}
          renderItem={({item})=><Text>{item.key}</Text>}
        />
           <FlatList
           keyExtractor={(item,index)=>index+''}
          data={['a','b','c','d']}
          renderItem={({item})=><Text>{item}</Text>}
        />
      </View>
    );
    */
  }
}

const styles = StyleSheet.create({
  ItemEven:{
    color:'#2B4B6F'
  },
  ItemUneven:{
    backgroundColor:'#D46A6A',
    color:'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
